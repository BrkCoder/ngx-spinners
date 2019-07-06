import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateLoaderComponent } from './rotate-loader.component';

describe('RotateLoaderComponent', () => {
  let component: RotateLoaderComponent;
  let fixture: ComponentFixture<RotateLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotateLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
