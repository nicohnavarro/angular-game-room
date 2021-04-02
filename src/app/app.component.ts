import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-room';

  constructor(private translateService:TranslateService){
    this.translateService.setDefaultLang('es');
    const lang = localStorage.getItem("lang") || "es"
    this.translateService.use(lang)
    document.documentElement.lang = lang
  }
}
