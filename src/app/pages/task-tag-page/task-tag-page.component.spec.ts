import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTagPageComponent } from './task-tag-page.component';

describe('TaskTagPageComponent', () => {
  let component: TaskTagPageComponent;
  let fixture: ComponentFixture<TaskTagPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTagPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
