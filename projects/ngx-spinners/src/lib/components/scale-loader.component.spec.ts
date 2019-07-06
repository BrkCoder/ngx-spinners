import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleLoaderComponent } from './scale-loader.component';

describe('ScaleLoaderComponent', () => {
  let component: ScaleLoaderComponent;
  let fixture: ComponentFixture<ScaleLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
