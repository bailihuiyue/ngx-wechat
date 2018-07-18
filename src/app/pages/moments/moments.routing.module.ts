import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentsComponent } from './moments.component';


const routes: Routes = [
  { path: '', component: MomentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentsRoutingModule {}
