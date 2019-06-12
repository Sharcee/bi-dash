import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugBrainComponent } from './drug-brain.component';

describe('DrugBrainComponent', () => {
  let component: DrugBrainComponent;
  let fixture: ComponentFixture<DrugBrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugBrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugBrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
