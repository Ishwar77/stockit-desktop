import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { MapModule } from '../map/map.module';
import { ChartsModule } from '../charts/charts.module';



@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule, MapModule, ChartsModule
  ],
  exports: [OverviewComponent]
})
export class OverviewModule { }
