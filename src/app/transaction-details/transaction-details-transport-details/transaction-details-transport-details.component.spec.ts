import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsTransportDetailsComponent } from './transaction-details-transport-details.component';

describe('TransactionDetailsTransportDetailsComponent', () => {
  let component: TransactionDetailsTransportDetailsComponent;
  let fixture: ComponentFixture<TransactionDetailsTransportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailsTransportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsTransportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
