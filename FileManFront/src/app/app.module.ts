import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './Home/home.module';

import {HttpClientModule} from '@angular/common/http';
import { SignInComponent } from './Demo/Login/sign-in/sign-in.component';
import { SignUpComponent } from './Demo/Login/sign-up/sign-up.component';
import { LogInComponent } from './Demo/Login/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    LogInComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
