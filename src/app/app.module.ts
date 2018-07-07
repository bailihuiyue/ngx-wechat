import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from "./app.router";
import { WeUiModule } from 'ngx-weui';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from './components/index';
import { AddressModule } from './pages/address/address.module'
import Pages from './pages/index';
import Services from './services/index';

import { currentPageReducer } from './redux/currentPage.redux';
import { DisplayIndexMenuReducer } from './redux/indexMenu.redux';
@NgModule({
  declarations: [
    AppComponent,
    ...Pages
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    WeUiModule.forRoot(),
    BrowserAnimationsModule,
    StoreModule.forRoot({ currentPageReducer, DisplayIndexMenuReducer }),
    StoreDevtoolsModule.instrument(),
    SharedModule,
    AddressModule
  ],
  providers: [
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
