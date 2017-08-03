import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTagListPageComponent } from './task-tag-list-page.component';

describe('TaskTagListPageComponent', () => {
  let component: TaskTagListPageComponent;
  let fixture: ComponentFixture<TaskTagListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTagListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTagListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
