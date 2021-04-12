import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './layout/menu/menu.component';
import { WidgetComponent } from './layout/widget/widget.component';
import { LanguageSelectorComponent } from './components/common/language-selector/language-selector.component';
import { GamesComponent } from './components/games/games.component';
import { SettingsComponent } from './components/settings/settings.component';
import { WhoiamComponent } from './components/whoiam/whoiam.component';
import { ScoresComponent } from './components/scores/scores.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    WidgetComponent,
    LanguageSelectorComponent,
    GamesComponent,
    SettingsComponent,
    WhoiamComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    AppRoutingModule
  ],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: LanguageInterceptor,
  //   multi:true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
