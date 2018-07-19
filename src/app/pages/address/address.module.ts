import { NgModule } from '@angular/core';
import { AddressComponent } from './address.component';
import { AddressRoutingModule } from './address.routing.module';
import { CommonModule } from '@angular/common';
//import {SharedModule} from '../../components/index';

@NgModule({
  imports: [
    AddressRoutingModule,
    CommonModule
    //SharedModule,
  ],
  declarations: [
    AddressComponent
  ],
  exports:[
    AddressComponent
  ]
})
export class AddressModule { }
