import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxQuoteComponent } from './parallax-quote.component';

describe('ParallaxQuoteComponent', () => {
  let component: ParallaxQuoteComponent;
  let fixture: ComponentFixture<ParallaxQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
