import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffixScreenerComponent } from './suffix-screener.component';

describe('SuffixScreenerComponent', () => {
  let component: SuffixScreenerComponent;
  let fixture: ComponentFixture<SuffixScreenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuffixScreenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuffixScreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
