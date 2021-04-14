import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db:AngularFirestore) { }

  getChats():Observable<any[]> {
    return this.db.collection<any>('chats').valueChanges({idField: 'docId'});
  }
  addChat(message:any){
    console.log(message)
    return this.db.collection('chats').add(message);
  }
}
