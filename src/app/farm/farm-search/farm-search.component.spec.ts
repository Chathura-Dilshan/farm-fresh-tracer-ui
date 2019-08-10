import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmSearchComponent } from './farm-search.component';

describe('FarmSearchComponent', () => {
  let component: FarmSearchComponent;
  let fixture: ComponentFixture<FarmSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
