import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  loading:boolean=true;
  constructor(private authSvc:AuthService) {
    const user = this.authSvc.getCurrentUser() 
    console.log(user);
    
    setTimeout(() => {
      this.loading=false;
    }, 5000);
  }

  ngOnInit(): void {
  }

}
