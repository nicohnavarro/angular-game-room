import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
games:any[];
  constructor(private router:Router) {
    this.games = [
      {id:1,name: 'tateti',description:"description1", image: "../../../assets/images/rockpapperscissor.jpg"},
      {id:2,name: 'rockscissorpapper',description:"description2", image: "../../../assets/images/tateti.jpg"},
    ]
   }

  ngOnInit(): void {
  }
  goToGame(name:string){
    this.router.navigate(['home/games/'+name])
  }

}
