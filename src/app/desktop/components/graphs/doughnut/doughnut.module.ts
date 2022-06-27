import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutComponent } from './doughnut.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [DoughnutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [DoughnutComponent]
})
export class DoughnutModule { }
