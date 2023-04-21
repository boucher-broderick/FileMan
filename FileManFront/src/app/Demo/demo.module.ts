import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { PasswordModule } from 'primeng/password';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { DemoMenuComponent } from './Features/menu/menu.component';
import { ContextMenuModule } from 'primeng/contextmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ProjectsComponent } from './Features/projects/projects-component/projects.component';
import { SignInComponent } from './Features/user-Auth/sign-in/sign-in.component';
import { CreateAccountComponent } from './Features/user-Auth/create-account/create-account.component';
import { CheckboxModule } from 'primeng/checkbox';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { FilesComponent } from './Features/files/files.component';


@NgModule({
  declarations: [
    DemoComponent,
    DemoMenuComponent,
    ProjectsComponent,
    SignInComponent,
    CreateAccountComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    DemoRoutingModule,
    ContextMenuModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    CommonModule,
    TableModule,
    CheckboxModule,
    DynamicDialogModule,
    PasswordModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: []
})
export class DemoModule { }
