import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymatrixComponent } from './categorymatrix.component';

describe('CategorymatrixComponent', () => {
  let component: CategorymatrixComponent;
  let fixture: ComponentFixture<CategorymatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorymatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorymatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
