import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  item:string;
  constructor() { 
    this.item=''
  }

  ngOnInit(): void {
  }

  changeMenu(item:string){
    console.log("home",item)
    this.item=item;
  }
}
