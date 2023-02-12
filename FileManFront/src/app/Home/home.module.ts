import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import {ContextMenuModule} from 'primeng/contextmenu';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ContextMenuModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
