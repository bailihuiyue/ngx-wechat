import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentsComponent } from './moments.component';
import { MomentsRoutingModule } from './moments.routing.module';
import {SharedModule} from '../../components/index';
@NgModule({
  imports: [
    CommonModule,
    MomentsRoutingModule,
    SharedModule
  ],
  declarations: [MomentsComponent]
})
export class MomentsModule { }
