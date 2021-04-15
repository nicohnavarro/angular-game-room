import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rockscissorpapper',
  templateUrl: './rockscissorpapper.component.html',
  styleUrls: ['./rockscissorpapper.component.scss']
})
export class RockscissorpapperComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goBack(){ 
    this.router.navigate(['home/games'])
  }

}
