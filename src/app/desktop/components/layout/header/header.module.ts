import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule} from '@angular/material/';
import { FilterToolbarModule } from '../../filter-toolbar/filter-toolbar.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FilterToolbarModule,
    MatButtonModule,  MatToolbarModule, MatMenuModule, MatIconModule,
    RouterModule.forChild([])
  ],
  exports: [HeaderComponent],

})
export class HeaderModule { }
