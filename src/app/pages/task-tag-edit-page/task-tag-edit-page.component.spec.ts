import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTagEditPageComponent } from './task-tag-edit-page.component';

describe('TaskTagEditPageComponent', () => {
  let component: TaskTagEditPageComponent;
  let fixture: ComponentFixture<TaskTagEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTagEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTagEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
