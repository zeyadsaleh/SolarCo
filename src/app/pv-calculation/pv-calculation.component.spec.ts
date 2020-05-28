import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvCalculationComponent } from './pv-calculation.component';

describe('PvCalculationComponent', () => {
  let component: PvCalculationComponent;
  let fixture: ComponentFixture<PvCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
