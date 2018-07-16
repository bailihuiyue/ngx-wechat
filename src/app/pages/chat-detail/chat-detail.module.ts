import { NgModule } from '@angular/core';
import { ChatDetailComponent } from './chat-detail.component';
import { ChatDetailRoutingModule } from './chat-detail.routing.module';
import { SharedModule } from '../../components/index';
import { ChatDetailFooterComponent } from '../../components/footers/chat-detail-footer/chat-detail-footer.component';
//TODO:info:*ngFor 没有被识别一般就是因为CommonModule没有被导入该module
// Property binding ngForOf not used by any directive on an embedded template.
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    ChatDetailRoutingModule,
    SharedModule,
    CommonModule
  ],
  declarations: [
    ChatDetailComponent,
    ChatDetailFooterComponent
  ]
})
export class ChatDetailModule { }
