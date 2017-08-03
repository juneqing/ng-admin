import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeEditPageComponent } from './recharge-edit-page.component';

describe('RechargeEditPageComponent', () => {
  let component: RechargeEditPageComponent;
  let fixture: ComponentFixture<RechargeEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
