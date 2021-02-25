/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   24 February 2021
; Modified by: Karina Alvarez
; Description: app component
;===========================================
*/

//These are files being imported from external files
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Bob's Computer Repair Shop";
  }
}
