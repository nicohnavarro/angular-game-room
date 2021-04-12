import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'game-room';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation ;
  }

  constructor(private translateService:TranslateService){
    this.translateService.setDefaultLang('es');
    const lang = localStorage.getItem("lang") || "es"
    this.translateService.use(lang)
    document.documentElement.lang = lang
  }
}
