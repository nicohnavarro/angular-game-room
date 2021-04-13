import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFirestore) { }

  getUsers():Observable<any[]> {
    return this.db.collection<any>('usuarios').valueChanges({idField: 'docId'});
  }
  addUser(user:any,id:string){
    return this.db.collection('usuarios').doc(id).set(user);
  }
  getUserById(id:string):Observable<any>{
    const usersDocuments = this.db.doc<any>('usuarios/' + id);
    return usersDocuments.snapshotChanges()
      .pipe(
        map(changes => {
          const data = changes.payload.data();
          const id = changes.payload.id;
          return { id, ...data };
        }))
  }
  getUser(id:string){
    return this.getUserById(id);
  }

  setLogUser(log:any){
    return this.db.collection('logs').add(log);
  }
}