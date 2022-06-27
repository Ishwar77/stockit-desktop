import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


export enum ViewCode {
  DESKTOP = 1,
  MOBILE = 2,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
  resizeListener: Observable<any>;

  showView: ViewCode = ViewCode.MOBILE;
  showSplash = true;

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.manageView();
  }

  ngAfterViewInit() {
    this.listenToResize();
    this.manageSplashScreen();
  }

  manageSplashScreen() {
    setTimeout(() => {
      this.showSplash = false;
      this.cdRef.markForCheck();
    }, 5000)
  }

  private manageView() {
    console.log(window.innerWidth);
    this.showView = (window.innerWidth > 1024) ? ViewCode.DESKTOP : ViewCode.MOBILE;
    this.cdRef.markForCheck();
  }

  listenToResize() {
    fromEvent(window, 'resize').pipe(debounceTime(200)).subscribe(res => {
      console.log('Res = ', res);
      this.manageView();
    });
  }

  clickedState(event) {
    console.log('Manage Clicked state ', event);
  }
}
