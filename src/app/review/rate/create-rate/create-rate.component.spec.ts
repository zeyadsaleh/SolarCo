import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRateComponent } from './create-rate.component';

describe('CreateRateComponent', () => {
  let component: CreateRateComponent;
  let fixture: ComponentFixture<CreateRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
