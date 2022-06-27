import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixComponent } from './matrix.component';
import { MapModule } from '../../components/map/map.module';
import { CategorymatrixModule } from '../../components/categorymatrix/categorymatrix.module';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
const routes: Routes = [
  {path: '', component: MatrixComponent}
];

@NgModule({
  declarations: [MatrixComponent],
  imports: [
    FlexLayoutModule,
    CommonModule, MapModule, CategorymatrixModule,
    RouterModule.forChild(routes)
  ]
})
export class MatrixModule { }
