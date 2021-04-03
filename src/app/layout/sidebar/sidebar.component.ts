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
  constructor() { }

  ngOnInit(): void {
  }

}
