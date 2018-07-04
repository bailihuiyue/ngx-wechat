import { NgModule } from '@angular/core';
import { ChatDetailComponent } from './chat-detail.component';
import { ChatDetailRoutingModule } from './chat-detail.routing.module';
//import {SharedModule} from '../../components/index';

@NgModule({
  imports: [
    ChatDetailRoutingModule
  ],
  declarations: [
    ChatDetailComponent
  ]
})
export class ChatDetailModule { }
