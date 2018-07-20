import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts.routing.module';
import { CommonModule } from '@angular/common';
//import {SharedModule} from '../../components/index';

@NgModule({
  imports: [
    ContactsRoutingModule,
    CommonModule
    //SharedModule,
  ],
  declarations: [
    ContactsComponent
  ],
  exports:[
    ContactsComponent
  ]
})
export class ContactsModule { }
