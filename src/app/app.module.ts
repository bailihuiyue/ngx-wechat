import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from "./app.router";
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
import { maskStatusReducer } from './redux/mask.redux';
import { NoMatchComponent } from './pages/no-match/no-match.component';
@NgModule({
  declarations: [
    AppComponent,
    ...Pages,
    NoMatchComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      currentPageReducer,
      DisplayIndexMenuReducer,
      maskStatusReducer
    }),
    StoreDevtoolsModule.instrument(),
    SharedModule,
    AddressModule
  ],
  providers: [
    ...Services,
    {
      provide: 'BASE_CONFIG',
      useValue: {
        imgUrl: './assets/images/avatar/',
        imgRedEnvelope: './assets/images/redEnvelope/',
        imgBaseUrl:'./assets/images/'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
