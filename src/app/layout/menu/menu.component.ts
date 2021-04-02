import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() itemMenu: string='home';
  loading: boolean = true;
  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.itemMenu = 'home';
    }, 2000);
  }

}
