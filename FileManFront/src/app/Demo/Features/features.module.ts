import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ContextMenuModule } from 'primeng/contextmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects-component/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    ContextMenuModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    CommonModule,
    TableModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: []
})
export class FeaturesModule { }



