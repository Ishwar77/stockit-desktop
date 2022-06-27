import { RouterOutletsCode } from 'src/app/util/router-outlets';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewpageComponent } from './overviewpage.component';
import { MapModule } from '../../components/map/map.module';
import { ChartsModule } from '../../components/charts/charts.module';
import { ListModule } from '../../components/list/list.module';
import { Routes, RouterModule } from '@angular/router';
import { OverviewModule } from '../../components/overview/overview.module';

const routes: Routes = [
  {path: '', component: OverviewpageComponent}
];


@NgModule({
  declarations: [OverviewpageComponent],
  imports: [
    CommonModule, OverviewModule, MapModule, ChartsModule, ListModule,
    RouterModule.forChild(routes)
  ],
  exports: [OverviewpageComponent]
})
export class OverviewpageModule { }
