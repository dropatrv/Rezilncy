import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TwitterAPIService } from './twitter.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { TwitterComponent }  from './twitter.component';
import {APP_BASE_HREF} from '@angular/common';
import { PaginationModule } from 'ng2-bootstrap/pagination/pagination.module';

const appRoutes: Routes = [
  { path: 'search', component: TwitterComponent }
  ];

@NgModule({
  imports:      [  PaginationModule.forRoot(), RouterModule.forRoot(appRoutes),
  BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, TwitterComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ {provide: APP_BASE_HREF, useValue : '/' },TwitterAPIService]
})
export class AppModule { }