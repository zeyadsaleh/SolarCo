import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnautherizedComponent } from './unautherized.component';

describe('UnautherizedComponent', () => {
  let component: UnautherizedComponent;
  let fixture: ComponentFixture<UnautherizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnautherizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnautherizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
