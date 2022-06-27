import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PieComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [PieComponent]
})
export class PieModule { }
