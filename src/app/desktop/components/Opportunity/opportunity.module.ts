import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { OpportunityComponent } from './opportunity.component';


@NgModule({
  declarations: [OpportunityComponent],
  imports: [
    CommonModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  exports: [OpportunityComponent]
})
export class OpportunityModule { }
