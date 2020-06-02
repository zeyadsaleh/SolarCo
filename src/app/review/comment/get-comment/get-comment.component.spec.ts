import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCommentComponent } from './get-comment.component';

describe('GetCommentComponent', () => {
  let component: GetCommentComponent;
  let fixture: ComponentFixture<GetCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
