import { AuthService } from './../../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: any
  currentUser: any;
  constructor(private authSvc: AuthService) {
    this.authSvc.getCurrentUser().then((data) => {
      this.currentUser = data
    })
  }

  ngOnInit(): void {
  }

}
