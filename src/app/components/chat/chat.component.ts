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
  constructor(private authSvc: AuthService) {
    this.user = this.authSvc.getCurrentUser()
    console.log(this.user);
    let message = {
      'img': "../../../assets/images/avatar.png",
      'user': { 'username': "Nico" },
      'date': new Date(),
      'text': "Esto es un amensaje de prubea"
    }

    
    this.messages.push(message)

    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  ngOnInit(): void {
  }

  sendMsg() {
    console.log(this.newMsg)
    let newMessage = {
      'img': this.user.photoURL ? this.user.photoURL : "../../../assets/images/avatar.png",
      'user': { 'username': this.user.email },
      'date': new Date(),
      'text': this.newMsg
    }
    this.newMsg = ''
    this.messages.push(newMessage)
    this.scrollBottom()

  }

  scrollBottom(){
    setTimeout(() => {
      const objDiv = document.getElementById("chats");
      if(objDiv){
        objDiv.scrollTop = objDiv.scrollHeight;
      }
    }, 500);
  }

}
