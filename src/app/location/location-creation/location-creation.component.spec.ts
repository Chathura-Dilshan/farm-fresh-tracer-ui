import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCreationComponent } from './location-creation.component';

describe('LocationCreationComponent', () => {
  let component: LocationCreationComponent;
  let fixture: ComponentFixture<LocationCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
