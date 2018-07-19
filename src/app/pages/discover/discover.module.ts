import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover.component';
import { DiscoverRoutingModule } from './discover.routing.module';
@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ],
  declarations: [DiscoverComponent]
})
export class DiscoverModule { }
