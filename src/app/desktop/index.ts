
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../desktop/components/layout/footer/footer.module';
import { FilterToolbarModule } from '../desktop/components/filter-toolbar/filter-toolbar.module';
import { HeaderModule } from '../desktop/components/layout/header/header.module';
import { NgModule } from '@angular/core';
import { DesktopViewComponent } from './desktop';
import { ListModule } from './components/list/list.module';
import { ContentModule } from './components/content/content.module';
import { OpportunityModule } from './components/Opportunity/opportunity.module';
import { OverviewModule } from './components/overview/overview.module';
import { CategorymatrixModule } from './components/categorymatrix/categorymatrix.module';
import { ExampleModule } from './components/example/example.module';


const childroutes: Routes = [
    {
        path: 'overview', loadChildren: () =>
            import('./pages/overviewpage/overviewpage.module').then(m => m.OverviewpageModule)
    },

    {
        path: 'opportunitypage', loadChildren: () =>
            import('./pages/opportunitypage/opportunitypage.module').then(m => m.OpportunitypageModule)
    },

    {
        path: 'categorymatrix', loadChildren: () =>
            import('./components/categorymatrix/categorymatrix.module').then(m => m.CategorymatrixModule)
    },

    {
        path: 'matrix', loadChildren: () =>
            import('./pages/matrix/matrix.module').then(m => m.MatrixModule)
    },
    {
        path: '', redirectTo: 'overview', pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HeaderModule,
        FilterToolbarModule,
        ContentModule,
        ListModule,
        ExampleModule,
        OpportunityModule,
        OverviewModule,
        CategorymatrixModule,
        FooterModule,
        RouterModule.forChild(childroutes)
    ],
    declarations: [
        DesktopViewComponent
    ],
    exports: [
        DesktopViewComponent
    ],
    bootstrap: [
        DesktopViewComponent
    ]
})
export class DesktopViewModule {

}
