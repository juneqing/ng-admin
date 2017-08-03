import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsPageComponent } from './statics-page.component';

describe('StaticsPageComponent', () => {
  let component: StaticsPageComponent;
  let fixture: ComponentFixture<StaticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
