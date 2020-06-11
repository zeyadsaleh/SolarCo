import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTutorialsComponent } from './all-tutorials.component';

describe('AllTutorialsComponent', () => {
  let component: AllTutorialsComponent;
  let fixture: ComponentFixture<AllTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
