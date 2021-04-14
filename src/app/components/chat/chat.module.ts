import { TranslateModule, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { ChatRoutingModule } from './chat.routing.module';
import { ChatComponent } from './chat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChatComponent,MessageComponent],
  imports: [
    TranslateModule,
    CommonModule,
    ChatRoutingModule,
    FormsModule,

  ]
})
export class ChatModule { }
