import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { MatPaginatorModule, MatTableModule } from '@angular/material';



@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule, MatPaginatorModule, MatTableModule
  ],
  exports: [ExampleComponent]
})
export class ExampleModule { }
