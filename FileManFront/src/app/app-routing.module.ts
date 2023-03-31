import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { ProjectsComponent } from './Demo/Features/projects/projects-component/projects.component';


const routes: Routes = [{ 
  path: '', 
  component: HomeComponent
 },
 {
  path: 'projects',
  component: ProjectsComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
