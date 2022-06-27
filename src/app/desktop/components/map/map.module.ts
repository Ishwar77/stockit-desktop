import { MapV2Module } from './../map-v2/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';



@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapV2Module
  ],
  exports: [MapComponent]
})
export class MapModule { }
