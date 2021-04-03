import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  item:string;
  constructor(private router:Router) { 
    this.item=''
  }

  ngOnInit(): void {
  }

  changeMenu(item:string){
    // this.router.navigate([item]);
    // if(item !=='home'){
    //   this.router.navigate(['home/'+item]);
    // }
    // console.log("home",item)
    // this.item=item;
  }
}
