import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './Home/home.module';

import {HttpClientModule} from '@angular/common/http';
import { FeaturesModule } from './Demo/Features/features.module';



@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    FeaturesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
