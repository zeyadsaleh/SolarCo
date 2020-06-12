import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResponseComponent } from './no-response.component';

describe('NoResponseComponent', () => {
  let component: NoResponseComponent;
  let fixture: ComponentFixture<NoResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
