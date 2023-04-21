import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';

import { DemoComponent } from './Demo/demo.component';
import { DemoRoutingModule } from './Demo/demo-routing.module';


const routes: Routes = [{ 
  path: '', 
  component: HomeComponent
 }, 
 {
  path: 'project',
  loadChildren: () => import(`./Demo/demo.module`).then((m) => m.DemoModule),
 },
 {
  path: 'signIn',
  loadChildren: () => import(`./Demo/demo.module`).then((m) => m.DemoModule),
 },
 {
  path: 'createAccount',
  loadChildren: () => import(`./Demo/demo.module`).then((m) => m.DemoModule),
 },
 {
   path: 'files', loadChildren: () => import(`./Demo/demo.module`).then((m) => m.DemoModule),
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    DemoRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
