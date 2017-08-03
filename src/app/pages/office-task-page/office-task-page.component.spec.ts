import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeTaskPageComponent } from './office-task-page.component';

describe('OfficeTaskPageComponent', () => {
  let component: OfficeTaskPageComponent;
  let fixture: ComponentFixture<OfficeTaskPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeTaskPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
