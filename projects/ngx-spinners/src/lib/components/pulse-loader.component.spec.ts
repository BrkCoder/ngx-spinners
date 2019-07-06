import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseLoaderComponent } from './pulse-loader.component';

describe('PulseLoaderComponent', () => {
  let component: PulseLoaderComponent;
  let fixture: ComponentFixture<PulseLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
