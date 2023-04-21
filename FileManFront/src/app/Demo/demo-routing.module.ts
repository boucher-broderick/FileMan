import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { ProjectsComponent } from './Features/projects/projects-component/projects.component';
import { SignInComponent } from './Features/user-Auth/sign-in/sign-in.component';
import { CreateAccountComponent } from './Features/user-Auth/create-account/create-account.component';
import { FilesComponent } from './Features/files/files.component';



const routes: Routes = [ {
  path: 'demo',
  component: DemoComponent,
  children:[
    {
      path: 'project', component: ProjectsComponent
    },
    {
      path: 'signIn', component: SignInComponent
    },
    {
      path: 'createAccount', component: CreateAccountComponent
    },
    {
      path: 'files', component: FilesComponent
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
