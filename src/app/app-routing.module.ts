/*
============================================
; Title:  app-routing.module.ts
; Author: Professor Krasso
; Date:   24 February 2021
; Modified by: Karina Alvarez
; Description: app routing
;===========================================
*/

//These are files being imported from external files
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceListComponent } from './service-list/service-list.component';

// These are the paths added to the routes array
// Each of these path will take you to designated component
const routes: Routes = [
  {
    path: '',
    component: ServiceListComponent
  },
  {
    path: 'service-list',
    component: ServiceListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
