import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { ListModule } from '../list/list.module';
import { List1Module } from '../list1/list1.module';
import { DougnutModule } from '../graphs/dougnut/dougnut.module';
import { DoughnutModule } from '../graphs/doughnut/doughnut.module';
import { LinegraphModule } from '../graphs/linegraph/linegraph.module';
import { PieModule } from '../graphs/pie/pie.module';
import { BargraphModule } from '../graphs/bargraph/bargraph.module';



@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    ListModule,
    List1Module,
    DougnutModule,
    DoughnutModule,
    LinegraphModule,
    PieModule,
    BargraphModule
  ],
  exports: [ChartsComponent]
})
export class ChartsModule { }
