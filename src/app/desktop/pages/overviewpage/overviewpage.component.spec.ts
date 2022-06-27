import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewpageComponent } from './overviewpage.component';

describe('OverviewpageComponent', () => {
  let component: OverviewpageComponent;
  let fixture: ComponentFixture<OverviewpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
