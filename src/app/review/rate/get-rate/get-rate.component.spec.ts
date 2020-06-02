import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRateComponent } from './get-rate.component';

describe('GetRateComponent', () => {
  let component: GetRateComponent;
  let fixture: ComponentFixture<GetRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
