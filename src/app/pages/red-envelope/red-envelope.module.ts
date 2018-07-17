import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { redEnvelopeRoutingModule } from './red-envelope.routing.module';
import { RedEnvelopeComponent } from './red-envelope.component';
import { SharedModule } from '../../components/index';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    redEnvelopeRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    RedEnvelopeComponent,
  ]
})
export class RedEnvelopeModule { }
