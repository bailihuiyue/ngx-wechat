import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatDetailComponent } from './chat-detail.component';


const routes: Routes = [
  { path: '', component: ChatDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatDetailRoutingModule {}
