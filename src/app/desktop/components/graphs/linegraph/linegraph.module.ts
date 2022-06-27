import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinegraphComponent } from './linegraph.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LinegraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [LinegraphComponent]
})
export class LinegraphModule { }
