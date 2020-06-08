import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerviousPostsComponent } from './pervious-posts.component';

describe('PerviousPostsComponent', () => {
  let component: PerviousPostsComponent;
  let fixture: ComponentFixture<PerviousPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerviousPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerviousPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
