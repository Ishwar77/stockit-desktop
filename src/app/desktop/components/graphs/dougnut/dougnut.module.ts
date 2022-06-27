import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DougnutComponent } from './dougnut.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [DougnutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [DougnutComponent]
})
export class DougnutModule { }
