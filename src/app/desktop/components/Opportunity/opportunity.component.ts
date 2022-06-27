import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import jsonData from '../../../../assets/data/opportunity.json';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { getScoreColor } from 'src/app/util/scoreColor';
import {
  ApplicationContext,
  ContextActionListencer,
  ContextEvents,
  ContextDataItem
} from 'src/app/util/applicationContext';
import { debounceTime } from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {
  displayedColumns: string[] = ['slno', 'sku', 'osa', 'rca', 'opportunity'];
  filtersite;
  filterbycategory;
  filterbybrand;
  filterbystore;

  dataSource = new MatTableDataSource<Opportunity>(jsonData);

  // tslint:disable-next-line: variable-name
  private _unit = '%';
    @Input()
    get unit() {
      return this._unit;
    }
    set unit(u) {
      this._unit = u;
    }

    @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private _cdRef: ChangeDetectorRef,
    private context: ApplicationContext) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this._cdRef.markForCheck();
    this.listenToContext();
  }
  getScoreColorCLass(score) {
    return getScoreColor(score);
  }

  public listenToContext() {
    this.context.listener
    .pipe(debounceTime(200))
    .subscribe((res: ContextActionListencer) => {
      console.log('RES ', res);
      console.log('THIS ', this);
      switch (res.event) {
        case ContextEvents.VALUDE_CHANGED:
          if (res.data.key === ContextDataItem.FILTER_SITE && res.data.value) {
            this.filtersite = res.data.value;
            this.filterbysite();
            // this.context.clearFilters([ContextDataItem.FILTER_CATEGORY, ContextDataItem.FILTER_BRAND, ContextDataItem.FILTER_STORE])
          }
          if (res.data.key === ContextDataItem.FILTER_CATEGORY && res.data.value) {
            this.filterbycategory = res.data.value;
            this.filtercategory();
            // this.context.clearFilters([ContextDataItem.FILTER_SITE, ContextDataItem.FILTER_BRAND, ContextDataItem.FILTER_STORE])
          }
          if (res.data.key === ContextDataItem.FILTER_BRAND && res.data.value) {
            this.filterbybrand = res.data.value;
            this.filterbrand();
            // this.context.clearFilters([ContextDataItem.FILTER_CATEGORY, ContextDataItem.FILTER_SITE, ContextDataItem.FILTER_STORE])
          }
          if (res.data.key === ContextDataItem.FILTER_STORE && res.data.value) {
            this.filterbystore = res.data.value;
            this.filterstore();
            // this.context.clearFilters([ContextDataItem.FILTER_CATEGORY, ContextDataItem.FILTER_BRAND, ContextDataItem.FILTER_SITE])
          }
      }
    });
}

filterbysite() {
console.log('JSON DATA ', jsonData);
const data = jsonData.filter(opportunity => opportunity.place.toLowerCase() === this.filtersite.site.toLowerCase());
console.log('DATA = ', data);
this.dataSource = new MatTableDataSource<Opportunity>(data);
this.dataSource.paginator = this.paginator;
}

filtercategory() {
  console.log('JSON DATA ', jsonData);
  const data = jsonData.filter(opportunity => opportunity.category.toLowerCase() === this.filterbycategory.category.toLowerCase());
  console.log('DATA = ', data);
  this.dataSource = new MatTableDataSource<Opportunity>(data);
  this.dataSource.paginator = this.paginator;
  }

  filterbrand() {
    console.log('JSON DATA ', jsonData);
    const data = jsonData.filter(opportunity => opportunity.brand.toLowerCase() === this.filterbybrand.brand.toLowerCase());
    console.log('DATA = ', data);
    this.dataSource = new MatTableDataSource<Opportunity>(data);
    this.dataSource.paginator = this.paginator;
    }

    filterstore() {
      console.log('JSON DATA ', jsonData);
      const data = jsonData.filter(opportunity => opportunity.store.toLowerCase() === this.filterbystore.toLowerCase());
      console.log('DATA = ', data);
      this.dataSource = new MatTableDataSource<Opportunity>(data);
      this.dataSource.paginator = this.paginator;
      }

}
export interface Opportunity {
  slno: number;
  sku: string;
  osa: number;
  rca: string;
  opportunity: string;
}
