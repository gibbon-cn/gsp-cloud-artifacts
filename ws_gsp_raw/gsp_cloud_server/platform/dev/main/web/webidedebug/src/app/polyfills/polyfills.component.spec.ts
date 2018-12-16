import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyfillsComponent } from './polyfills.component';

describe('PolyfillsComponent', () => {
  let component: PolyfillsComponent;
  let fixture: ComponentFixture<PolyfillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolyfillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolyfillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
