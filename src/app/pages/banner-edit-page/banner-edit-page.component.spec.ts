import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEditPageComponent } from './banner-edit-page.component';

describe('BannerEditPageComponent', () => {
  let component: BannerEditPageComponent;
  let fixture: ComponentFixture<BannerEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
