import { GamesRoutingModule } from './games.routing.module';
import { GamesComponent } from './games.component';
import { TranslateModule, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TatetiComponent } from './tateti/tateti.component';
import { RockscissorpapperComponent } from './rockscissorpapper/rockscissorpapper.component';

@NgModule({
  declarations: [GamesComponent, TatetiComponent, RockscissorpapperComponent],
  imports: [
    TranslateModule,
    CommonModule,
    GamesRoutingModule,
    FormsModule,

  ]
})
export class GamesModule { }
