
import { PeriodicElement } from '../../views/home/home.component';
import { Component, Inject, inject, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-element-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule],
  templateUrl: './element-dialog.component.html',
  styleUrl: './element-dialog.component.css',
})
export class ElementDialogComponent {




}
