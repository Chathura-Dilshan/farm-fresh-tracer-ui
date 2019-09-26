import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsGuestUserPanelComponent } from './transaction-details-guest-user-panel.component';

describe('TransactionDetailsGuestUserPanelComponent', () => {
  let component: TransactionDetailsGuestUserPanelComponent;
  let fixture: ComponentFixture<TransactionDetailsGuestUserPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailsGuestUserPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsGuestUserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
