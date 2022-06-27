import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List1Component } from './list1.component';
import { MatListModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [List1Component],
  imports: [
    CommonModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  exports: [List1Component]
})
export class List1Module { }
