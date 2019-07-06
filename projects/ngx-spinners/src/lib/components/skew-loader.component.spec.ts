import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkewLoaderComponent } from './skew-loader.component';

describe('SkewLoaderComponent', () => {
  let component: SkewLoaderComponent;
  let fixture: ComponentFixture<SkewLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkewLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkewLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
