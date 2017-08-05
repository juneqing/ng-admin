import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditPageComponent } from './task-edit-page.component';

describe('TaskEditPageComponent', () => {
  let component: TaskEditPageComponent;
  let fixture: ComponentFixture<TaskEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
