import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingComponent } from './user-setting.component';
import{UserSettingRoutingModule}from './user-setting.routing.module';
import { SharedModule } from '../../components/index';
@NgModule({
  imports: [
    CommonModule,
    UserSettingRoutingModule,
    SharedModule
  ],
  declarations: [UserSettingComponent]
})
export class UserSettingModule { }
