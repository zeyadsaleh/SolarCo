import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRatesComponent } from './get-rates.component';

describe('GetRatesComponent', () => {
  let component: GetRatesComponent;
  let fixture: ComponentFixture<GetRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
