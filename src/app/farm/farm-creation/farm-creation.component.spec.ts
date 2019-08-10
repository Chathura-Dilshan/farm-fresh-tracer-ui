import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmCreationComponent } from './farm-creation.component';

describe('FarmCreationComponent', () => {
  let component: FarmCreationComponent;
  let fixture: ComponentFixture<FarmCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
