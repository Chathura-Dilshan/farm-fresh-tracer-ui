import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsWarehouseDetailsComponent } from './transaction-details-warehouse-details.component';

describe('TransactionDetailsWarehouseDetailsComponent', () => {
  let component: TransactionDetailsWarehouseDetailsComponent;
  let fixture: ComponentFixture<TransactionDetailsWarehouseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailsWarehouseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsWarehouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
