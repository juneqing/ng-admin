import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTagNewPageComponent } from './task-tag-new-page.component';

describe('TaskTagNewPageComponent', () => {
  let component: TaskTagNewPageComponent;
  let fixture: ComponentFixture<TaskTagNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTagNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTagNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
