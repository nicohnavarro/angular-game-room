import { ChatComponent } from './components/chat/chat.component';
import { Login2Component } from './pages/login2/login2.component';
import { WhoiamComponent } from './components/whoiam/whoiam.component';
import { ScoresComponent } from './components/scores/scores.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MenuComponent } from './layout/menu/menu.component';
import { GamesComponent } from './components/games/games.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent ,  data: {animation: 'home'}},
  {
    path: 'home', component: HomeComponent,  data: {animation: 'home'}, children: [
      {path: "", component: MenuComponent},
      {path: "my", component: MenuComponent},
      {path: "games",  loadChildren: () => import('./components/games/games.module').then(m => m.GamesModule)},
      {path: "settings", component: SettingsComponent},
      {path: "scores", component: ScoresComponent},
      {path: "chat", loadChildren: () => import('./components/chat/chat.module').then(m => m.ChatModule)},
      {path: "whoIAm", component: WhoiamComponent},]
  },
  { path: 'login', component: LoginComponent , data: {animation: 'login'}},
  { path: 'login2', component: Login2Component , data: {animation: 'login'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
