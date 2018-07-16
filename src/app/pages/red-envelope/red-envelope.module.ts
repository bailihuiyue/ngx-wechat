import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { redEnvelopeRoutingModule } from './red-envelope.routing.module';
import { RedEnvelopeComponent } from './red-envelope.component';
import { SharedModule } from '../../components/index';
@NgModule({
  imports: [
    CommonModule,
    redEnvelopeRoutingModule,
    SharedModule
  ],
  declarations: [
    RedEnvelopeComponent,
  ]
})
export class RedEnvelopeModule { }
