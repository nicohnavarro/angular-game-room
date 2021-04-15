import { RockscissorpapperComponent } from './rockscissorpapper/rockscissorpapper.component';
import { TatetiComponent } from './tateti/tateti.component';
import { GamesComponent } from './games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: GamesComponent
  },
  { path: 'tateti', component: TatetiComponent },
  { path: 'rockscissorpapper', component: RockscissorpapperComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
