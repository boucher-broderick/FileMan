import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import {ContextMenuModule} from 'primeng/contextmenu';
import { AboutComponent } from './componentsOfHome/about/about.component';
import { ContactUsComponent } from './componentsOfHome/contact-us/contact-us.component';
import { ViewDemoComponent } from './componentsOfHome/view-demo/view-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactUsComponent,
    ViewDemoComponent
  ],
  imports: [
    BrowserModule,
    ContextMenuModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
