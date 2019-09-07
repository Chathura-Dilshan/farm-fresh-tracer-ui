import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsSupermarketDetailsComponent } from './transaction-details-supermarket-details.component';

describe('TransactionDetailsSupermarketDetailsComponent', () => {
  let component: TransactionDetailsSupermarketDetailsComponent;
  let fixture: ComponentFixture<TransactionDetailsSupermarketDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailsSupermarketDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsSupermarketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
