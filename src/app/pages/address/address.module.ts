import { NgModule } from '@angular/core';
import { AddressComponent } from './address.component';
import { AddressRoutingModule } from './address.routing.module';
import {SharedModule} from '../../components/index';

@NgModule({
  imports: [
    AddressRoutingModule,
    SharedModule,
  ],
  declarations: [
    AddressComponent
  ]
})
export class AddressModule { }
