import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMassIndexCreationComponent } from './body-mass-index-creation.component';

describe('BodyMassIndexCreationComponent', () => {
  let component: BodyMassIndexCreationComponent;
  let fixture: ComponentFixture<BodyMassIndexCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyMassIndexCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMassIndexCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
