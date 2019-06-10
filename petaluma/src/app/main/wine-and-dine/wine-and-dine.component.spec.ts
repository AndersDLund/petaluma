import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineAndDineComponent } from './wine-and-dine.component';

describe('WineAndDineComponent', () => {
  let component: WineAndDineComponent;
  let fixture: ComponentFixture<WineAndDineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineAndDineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineAndDineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
