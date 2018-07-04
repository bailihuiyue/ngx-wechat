import { NgModule } from '@angular/core';
import { ChatDetailComponent } from './chat-detail.component';
import { ChatDetailRoutingModule } from './chat-detail.routing.module';
import {HeaderButtonComponent} from '../../components/headers/header-button/header-button.component';
//import {SharedModule} from '../../components/index';

@NgModule({
  imports: [
    ChatDetailRoutingModule
  ],
  declarations: [
    ChatDetailComponent,
    HeaderButtonComponent
  ]
})
export class ChatDetailModule { }
