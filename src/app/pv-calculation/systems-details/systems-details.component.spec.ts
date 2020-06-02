import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsDetailsComponent } from './systems-details.component';

describe('SystemsDetailsComponent', () => {
  let component: SystemsDetailsComponent;
  let fixture: ComponentFixture<SystemsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
