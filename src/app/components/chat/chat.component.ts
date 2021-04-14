import { ChatService } from './../../services/chat.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  loading: boolean = true;
  messages: any[] = [];
  newMsg: string = '';
  user: any = null;
  constructor(private authSvc: AuthService, private chatSvc:ChatService) {
    this.authSvc.getCurrentUser().then((data)=>{
      this.user = data;
      this.getMessages()
      this.scrollBottom()
    })
    console.log(this.user);


    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  ngOnInit(): void {
  }

  async sendMsg() {
    let newMessage = {
      'img': this.user.photoURL ? this.user.photoURL : "../../../assets/images/avatar.png",
      'user': { 'username': this.user.email },
      'date': new Date(),
      'text': this.newMsg
    }
    this.newMsg = ''
    const resp = await this.chatSvc.addChat(newMessage);
    console.log(resp);
    this.getMessages();
    this.scrollBottom()
  }

  getMessages(){
    this.chatSvc.getChats().subscribe((data)=>{
      console.log(data);
      data? this.messages = data : null;
      this.messages = data.sort((a: any, b: any) => {
        return a.date - b.date;
      }).map(msg =>{ return {...msg, date: msg.date.toDate()}});
    },(error)=>{
      console.log(error);
    })
  }
  scrollBottom(){
    setTimeout(() => {
      const objDiv = document.getElementById("chats");
      if(objDiv){
        objDiv.scrollTop = objDiv.scrollHeight;
      }
    }, 1000);
  }

}
