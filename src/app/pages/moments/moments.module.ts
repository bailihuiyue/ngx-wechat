import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentsComponent } from './moments.component';
import { MomentsRoutingModule } from './moments.routing.module';
@NgModule({
  imports: [
    CommonModule,
    MomentsRoutingModule
  ],
  declarations: [MomentsComponent]
})
export class MomentsModule { }
