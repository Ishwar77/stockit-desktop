import { CommonModule } from '@angular/common';
import { MapComponentV2 } from './component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
    declarations: [
        MapComponentV2
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        LoadingModule
    ],
    exports: [
        MapComponentV2
    ]
})
export class MapV2Module {

}
