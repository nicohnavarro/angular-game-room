import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
games:any[];
  constructor() {
    this.games = [
      {id:1,name: 'Game1',description:"description1"},
      {id:2,name: 'Game2',description:"description2"},
      {id:3,name: 'Game3',description:"description3"},
      {id:1,name: 'Game1',description:"description1"},
      {id:2,name: 'Game2',description:"description2"},
      {id:3,name: 'Game3',description:"description3"},
    ]
   }

  ngOnInit(): void {
  }

}
