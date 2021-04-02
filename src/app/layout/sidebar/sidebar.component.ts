import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() eventItemMenu: EventEmitter<string> = new EventEmitter();

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

  selectMenuOption(item:string){
    this.eventItemMenu.emit(item);
  }

}
