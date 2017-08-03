import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRecordListPageComponent } from './task-record-list-page.component';

describe('TaskRecordListPageComponent', () => {
  let component: TaskRecordListPageComponent;
  let fixture: ComponentFixture<TaskRecordListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRecordListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRecordListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
