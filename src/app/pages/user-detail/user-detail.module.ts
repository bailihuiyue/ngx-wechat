import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';
import { SharedModule } from '../../components/index';
import { ChatDetailRoutingModule } from './user-detail.routing.module';
@NgModule({
  imports: [
    CommonModule,
    ChatDetailRoutingModule,
    SharedModule
  ],
  declarations: [UserDetailComponent]
})
export class UserDetailModule { }
