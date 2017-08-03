import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeListPageComponent } from './recharge-list-page.component';

describe('RechargeListPageComponent', () => {
  let component: RechargeListPageComponent;
  let fixture: ComponentFixture<RechargeListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
