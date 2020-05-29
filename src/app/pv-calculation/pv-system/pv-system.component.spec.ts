import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvSystemComponent } from './pv-system.component';

describe('PvSystemComponent', () => {
  let component: PvSystemComponent;
  let fixture: ComponentFixture<PvSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
