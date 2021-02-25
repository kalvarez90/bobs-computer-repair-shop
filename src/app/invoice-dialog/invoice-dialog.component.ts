/*
============================================
; Title:  invoice-dialog.component.ts
; Author: Professor Krasso
; Date:   24 February 2021
; Modified by: Karina Alvarez
; Description: invoice dialog
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})

export class InvoiceDialogComponent implements OnInit {

  //Inputs that will help calculate the total and tax of the selected products
  @Input() selectedItemsList;
  @Input() total: number;
  @Input() tax: number;

  //This will input today's date into the top of the order invoice
  today: number = Date.now();

  constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA)data) {
      this.total = data.total,
      this.tax = data.total * 0.06
      this.selectedItemsList = data.selectedItemsList;
    }

  ngOnInit(): void {  }

}
