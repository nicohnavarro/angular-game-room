import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  mensajesColeccion: AngularFirestoreCollection<any>;
  mensajes: Observable<any[]>;
  constructor(private db:AngularFirestore) {

    this.mensajesColeccion = this.db.collection('chats');
    this.mensajes = this.mensajesColeccion.snapshotChanges().pipe(
      map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as any;
            data.id = a.payload.doc.id;
            return data
          });
        }));
   }

  getChats():Observable<any[]> {
    return this.db.collection<any>('chats').valueChanges({idField: 'docId'});
  }

  getChatsMejorado(){
    return this.mensajes;
  }
  
  addChat(message:any){
    console.log(message)
    return this.db.collection('chats').add(message);
  }
}
