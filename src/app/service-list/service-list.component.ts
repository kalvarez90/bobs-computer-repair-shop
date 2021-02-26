/*
============================================
; Title:  service-list.component.ts
; Author: Professor Krasso
; Date:   24 February 2021
; Modified by: Karina Alvarez
; Description: service list page
;===========================================
*/

//These are files being imported from external files
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

//arrays that will help with the checkboxes
selectedItemsList = [];
checkedIDs = [];
checkedValues = [];

total: number;
partsCost = 0;
laborCost = 0;


constructor(private dialog: MatDialog) {}

//function that will allow to open the invoice component
submit() {
  const dialogRef = this.dialog.open(InvoiceDialogComponent, {
    width: '30%',
    data: {selectedItemsList: this.selectedItemsList, total: this.total, partsCost: this.partsCost, laborCost: this.laborCost}
  });
}

//Different products with specific price that will display in the html file as checkboxes
servicesList = [
   {
      name: "Password Reset",
      value: 39.99,
      id: 'passwordReset',
      label: 'Password Reset - $39.99',
      isChecked: false
    },
    {
      name: "Spyware Removal",
      value: 99.99,
      id: 'spywareRemoval',
      label: 'Spyware Removal - $99.99',
      isChecked: false
    },
    {
      name: "Ram Upgrade",
      value: 129.99,
      id: 'ramUpgrade',
      label: 'Ram Upgrade - $129.99',
      isChecked: false
    },
    {
      name: "Spyware Installation",
      value: 49.99,
      id: 'spywareInstallation',
      label: 'Spyware Installation - $49.99',
      isChecked: false
    },
    {
      name: "Tune Up",
      value: 89.99,
      id: 'tuneUp',
      label: 'Tune Up - $89.99',
      isChecked: false
    },
    {
      name: "Keyboard Cleaning",
      value: 45.00,
      id: 'keyboardCleaning',
      label: 'Keyboard Cleaning - $45.00',
      isChecked: false
    },
    {
      name: "Disk Clean Up",
      value: 149.99,
      id: 'diskCleanUp',
      label: 'Disk Clean Up - $149.99',
      isChecked: false
    }
]

ngOnInit(): void {
  this.total = 0;
  this.getSelectedItems()
  this.getCheckedIDs()
}

// This function should reset total
changeSelection() {
  this.total = 0;
  this.getSelectedItems()
  this.getCheckedIDs()
}

getSelectedItems() {
  this.selectedItemsList = this.servicesList.filter((value) => {
    return value.isChecked
  });
}

//This will push checked id's and calculate a total value
getCheckedIDs() {
  this.checkedIDs = []
  this.servicesList.forEach((value) => {

    if (value.isChecked) {
      this.checkedIDs.push(value.id);
      this.total += value.value;
    }
  });
}
}
