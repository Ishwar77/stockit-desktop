import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import jsonData from '../../../../assets/data/categorymatrix.json';
import { getScoreColor } from 'src/app/util/scoreColor';
import {
  ApplicationContext,
  ContextActionListencer,
  ContextEvents,
  ContextDataItem
} from 'src/app/util/applicationContext';
import { debounceTime } from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';

export interface CategoryMatrix {
  place?: string;
  haircare?: string;
  babycare?: string;
  oralcare?: string;
  personalcare?: string;
  petcare?: string;
}

@Component({
  selector: 'app-categorymatrix',
  templateUrl: './categorymatrix.component.html',
  styleUrls: ['./categorymatrix.component.scss']
})
export class CategorymatrixComponent implements OnInit {
  displayedColumns: string[] = [
    'place',
    'haircare',
    'babycare',
    'oralcare',
    'personalcare',
    'petcare'
  ];
  dataSource = new MatTableDataSource<CategoryMatrix>(jsonData);
  filtersite;
  filterbycategory;
  filterbybrand;
  filterbystore;


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
  // tslint:disable-next-line: variable-name
  constructor(
    // tslint:disable-next-line: variable-name
    private _cdRef: ChangeDetectorRef,
    private context: ApplicationContext
  ) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this._cdRef.markForCheck();
    this.listenToContext();
  }
  getScoreColorCLass(score) {
    return getScoreColor(score);
  }

  private listenToContext() {
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
              // this.context.clearFilters([ContextDataItem.FILTER_CATEGORY, ContextDataItem.FILTER_BRAND, ContextDataItem.FILTER_STORE]);
            }
            if (res.data.key === ContextDataItem.FILTER_CATEGORY && res.data.value) {
              this.filterbycategory = res.data.value;
              this.filtercategory();
              // this.context.clearFilters([ContextDataItem.FILTER_SITE, ContextDataItem.FILTER_BRAND, ContextDataItem.FILTER_STORE]);
            }
            if (res.data.key === ContextDataItem.FILTER_BRAND) {
              this.filterbybrand = res.data.value;
              this.filterbrand();
            }
            if (res.data.key === ContextDataItem.FILTER_STORE && res.data.value) {
              this.filterbystore = res.data.value;
              this.filterstore();
              // this.context.clearFilters([ContextDataItem.FILTER_CATEGORY, ContextDataItem.FILTER_BRAND, ContextDataItem.FILTER_SITE]);
            }
        }
      });
  }

  filterbysite() {
console.log('JSON DATA ', jsonData);
const data = jsonData.filter(store => store.place.toLowerCase() === this.filtersite.site.toLowerCase());
console.log('DATA = ', data);
this.dataSource = new MatTableDataSource<CategoryMatrix>(data);
this.dataSource.paginator = this.paginator;
  }

  filtercategory() {
    console.log('JSON DATA ', jsonData);
    const data = jsonData.filter(store => store.category.toLowerCase() === this.filterbycategory.category.toLowerCase());
    console.log('DATA = ', data);
    this.dataSource = new MatTableDataSource<CategoryMatrix>(data);
    this.dataSource.paginator = this.paginator;
    }

    filterbrand() {
      console.log('JSON DATA ', jsonData);
      const data = jsonData.filter(store => store.brand.toLowerCase() === this.filterbybrand.brand.toLowerCase());
      console.log('DATA = ', data);
      this.dataSource = new MatTableDataSource<CategoryMatrix>(data);
      this.dataSource.paginator = this.paginator;
      }

      filterstore() {
        console.log('JSON DATA ', jsonData);
        const data = jsonData.filter(store => store.store.toLowerCase() === this.filterbystore.toLowerCase());
        console.log('DATA = ', data);
        this.dataSource = new MatTableDataSource<CategoryMatrix>(data);
        this.dataSource.paginator = this.paginator;
        }
}
