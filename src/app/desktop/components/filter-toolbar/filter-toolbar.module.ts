import { MatSelectModule, MatMenuModule } from '@angular/material/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterToolbarComponent } from './filter-toolbar.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [FilterToolbarComponent],
  imports: [
    CommonModule,
    MatSelectModule, HttpClientModule, MatMenuModule
  ],
  exports: [FilterToolbarComponent]
})
export class FilterToolbarModule { }
