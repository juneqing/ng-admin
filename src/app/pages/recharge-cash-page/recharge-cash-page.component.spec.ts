import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeCashPageComponent } from './recharge-cash-page.component';

describe('RechargeCashPageComponent', () => {
  let component: RechargeCashPageComponent;
  let fixture: ComponentFixture<RechargeCashPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeCashPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeCashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
