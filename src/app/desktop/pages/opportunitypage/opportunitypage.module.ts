import { RouterOutletsCode } from 'src/app/util/router-outlets';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunitypageComponent } from './opportunitypage.component';
import { MapModule } from '../../components/map/map.module';
import { OpportunityModule } from '../../components/Opportunity/opportunity.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: OpportunitypageComponent}
];


@NgModule({
  declarations: [OpportunitypageComponent],
  imports: [
    CommonModule, MapModule, OpportunityModule,
    RouterModule.forChild(routes)
  ],
  exports: [OpportunitypageComponent]
})
export class OpportunitypageModule { }
