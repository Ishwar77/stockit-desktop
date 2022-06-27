import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationContext, ContextDataItem } from 'src/app/util/applicationContext';
@Component({
  selector: 'app-filter-toolbar',
  templateUrl: './filter-toolbar.component.html',
  styleUrls: ['./filter-toolbar.component.scss']
})
export class FilterToolbarComponent implements OnInit {
  sites: any = [];
  category: any = [];
  brand: any = [];
  storename: any = [];
  account: any = [];
  selectedSite;
  selectedCategory;
  selectedBrand;
  selectedStore;
  selectedAccount;

  constructor(
    private cdref: ChangeDetectorRef,
    private httpclient: HttpClient,
    private context: ApplicationContext

  ) { }

  ngOnInit() {
    this.site();
    this.categorys();
    this.brands();
    this.storenames();
    this.accounts();
  }

  onSiteChange(data) {
console.log('Site DATA', data);
this.context.setData(ContextDataItem.FILTER_SITE, data.value);
this.selectedCategory = {};
this.selectedBrand = {};
this.selectedStore = {};
this.selectedAccount = {};
  }

  onCategoryChange(data) {
console.log('Category DATA', data);
this.context.setData(ContextDataItem.FILTER_CATEGORY, data.value);
this.selectedSite = {};
this.selectedBrand = {};
this.selectedStore = {};
this.selectedAccount = {};
  }

  onBrandChange(data) {
console.log('Brand DATA ', data);
this.context.setData(ContextDataItem.FILTER_BRAND, data.value);
this.selectedSite = {};
this.selectedCategory = {};
this.selectedStore = {};
this.selectedAccount = {};
  }

  onStoreChange(data) {
console.log('Store DATA ', data);
this.context.setData(ContextDataItem.FILTER_STORE, data.value);
this.selectedSite = {};
this.selectedCategory = {};
this.selectedBrand = {};
this.selectedAccount = {};
  }

  onAccountChange(data) {
    console.log('Account DATA ', data);
    this.context.setData(ContextDataItem.FILTER_ACCOUNT, data.value);
    this.selectedSite = {};
    this.selectedCategory = {};
    this.selectedBrand = {};
    this.selectedSite = {};
      }

  site() {
    this.httpclient.get('assets/data/site.json').subscribe((res) => {
       this.sites = res;
       this.cdref.markForCheck();
    });
  }

  categorys() {
    this.httpclient.get('assets/data/categorytoolbar.json').subscribe((res) => {
       this.category = res;
       this.cdref.markForCheck();
    });
  }

  brands() {
    this.httpclient.get('assets/data/brand.json').subscribe((res) => {
       this.brand = res;
       this.cdref.markForCheck();
    });
  }

  storenames() {
    this.httpclient.get('assets/data/storename.json').subscribe((res) => {
       this.storename = res;
       this.cdref.markForCheck();
    });
  }

  accounts() {
    this.httpclient.get('assets/data/account.json').subscribe((res) => {
       this.account = res;
       this.cdref.markForCheck();
    });
  }

  click() {
    window.location.reload();
  }
}
