import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatListModule, MatPaginatorModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
