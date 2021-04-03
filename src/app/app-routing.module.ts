import { MenuComponent } from './layout/menu/menu.component';
import { GamesComponent } from './components/games/games.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home', component: HomeComponent, children: [
      {path: "home", component: MenuComponent},
      {path: "games", component: GamesComponent},
      {path: "settings", component: GamesComponent},
      {path: "scores", component: GamesComponent},
      {path: "whoIAm", component: GamesComponent},]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
