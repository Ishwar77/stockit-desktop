import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BargraphComponent } from './bargraph.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BargraphComponent],
  imports: [
    CommonModule, ChartsModule, FormsModule
  ],
  exports: [BargraphComponent]
})
export class BargraphModule { }
