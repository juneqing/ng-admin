import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeReleaseEditPageComponent } from './office-release-edit-page.component';

describe('OfficeReleaseEditPageComponent', () => {
  let component: OfficeReleaseEditPageComponent;
  let fixture: ComponentFixture<OfficeReleaseEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeReleaseEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeReleaseEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
