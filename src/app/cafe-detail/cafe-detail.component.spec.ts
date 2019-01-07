import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeDetailComponent } from './cafe-detail.component';

describe('CafeDetailComponent', () => {
  let component: CafeDetailComponent;
  let fixture: ComponentFixture<CafeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
