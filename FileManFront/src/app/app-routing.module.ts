import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { LogInComponent } from './Demo/Login/log-in/log-in.component';


const routes: Routes = [{ 
  path: '', 
  component: HomeComponent
 },
 {
  path: 'Login',
  component: LogInComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
