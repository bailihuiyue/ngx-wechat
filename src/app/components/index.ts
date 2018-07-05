import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatListComponent } from './chat-list/chat-list.component';
import { MainComponent } from './main/main.component';
import { IndexHeaderComponent } from './headers/index-header/index-header.component';
import { IndexFooterComponent } from './footers/index-footer/index-footer.component';
import { ContactComponent } from './contact-list/contact-list.component';
import { HeaderButtonComponent } from './headers/header-button/header-button.component';
import { IndexMenuComponent } from './headers/index-menu/index-menu.component';
@NgModule({
  declarations: [
    ChatListComponent,
    MainComponent,
    IndexHeaderComponent,
    IndexFooterComponent,
    ContactComponent,
    HeaderButtonComponent,
    IndexMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ChatListComponent,
    MainComponent,
    IndexHeaderComponent,
    IndexFooterComponent,
    ContactComponent,
    HeaderButtonComponent,
    IndexMenuComponent
  ]
})
export class SharedModule { }