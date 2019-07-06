import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleLoaderComponent } from './circle-loader.component';

describe('CircleLoaderComponent', () => {
  let component: CircleLoaderComponent;
  let fixture: ComponentFixture<CircleLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
