import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsFarmDetailsComponent } from './transaction-details-farm-details.component';

describe('TransactionDetailsFarmDetailsComponent', () => {
  let component: TransactionDetailsFarmDetailsComponent;
  let fixture: ComponentFixture<TransactionDetailsFarmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailsFarmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsFarmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
