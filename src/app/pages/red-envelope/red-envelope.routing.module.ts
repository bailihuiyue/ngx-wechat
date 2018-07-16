import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedEnvelopeComponent } from './red-envelope.component';


const routes: Routes = [
  { path: '', component: RedEnvelopeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class redEnvelopeRoutingModule {}
