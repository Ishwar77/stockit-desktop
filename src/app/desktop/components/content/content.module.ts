import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { OverviewModule } from '../overview/overview.module';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule, OverviewModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
