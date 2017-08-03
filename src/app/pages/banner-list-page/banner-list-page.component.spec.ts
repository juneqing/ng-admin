import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerListPageComponent } from './banner-list-page.component';

describe('BannerListPageComponent', () => {
  let component: BannerListPageComponent;
  let fixture: ComponentFixture<BannerListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
