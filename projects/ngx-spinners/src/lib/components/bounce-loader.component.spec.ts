import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BounceLoaderComponent } from './bounce-loader.component';

describe('BounceLoaderComponent', () => {
  let component: BounceLoaderComponent;
  let fixture: ComponentFixture<BounceLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BounceLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BounceLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
