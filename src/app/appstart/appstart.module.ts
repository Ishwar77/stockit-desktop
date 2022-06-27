import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppstartComponent } from './appstart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppstartComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [AppstartComponent],
})
export class AppstartModule { }
