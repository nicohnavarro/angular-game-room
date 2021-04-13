import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items = [
    {
      'icon': 'home',
      'name': 'home'
    },
    {
      'icon': 'chat',
      'name': 'chat'
    },
    {
      'icon': 'games',
      'name': 'games'
    },
    {
      'icon': 'grade',
      'name': 'scores'
    },
    {
      'icon': 'miscellaneous_services',
      'name': 'settings'
    },
    {
      'icon': 'code',
      'name': 'whoIAm'
    }
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('login2');
  }

}
