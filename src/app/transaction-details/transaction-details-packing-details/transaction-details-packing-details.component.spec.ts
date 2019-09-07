import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsPackingDetailsComponent } from './transaction-details-packing-details.component';

describe('TransactionDetailsPackingDetailsComponent', () => {
  let component: TransactionDetailsPackingDetailsComponent;
  let fixture: ComponentFixture<TransactionDetailsPackingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailsPackingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsPackingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
