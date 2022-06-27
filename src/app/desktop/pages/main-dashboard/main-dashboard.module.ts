import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard.component';
import { MapModule } from '../../components/map/map.module';



@NgModule({
  declarations: [MainDashboardComponent],
  imports: [
    CommonModule,
    MapModule
  ],
  exports:[MainDashboardComponent]
})
export class MainDashboardModule { }
