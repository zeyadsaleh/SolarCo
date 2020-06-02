import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorProfileComponent } from './contractor-profile.component';

describe('ContractorProfileComponent', () => {
  let component: ContractorProfileComponent;
  let fixture: ComponentFixture<ContractorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
