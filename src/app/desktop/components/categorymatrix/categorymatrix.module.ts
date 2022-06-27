import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorymatrixComponent } from './categorymatrix.component';
import { MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';


@NgModule({
  declarations: [CategorymatrixComponent],
  imports: [
    CommonModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  exports: [CategorymatrixComponent]
})
export class CategorymatrixModule { }
