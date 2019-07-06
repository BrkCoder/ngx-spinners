import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotLoaderComponent } from './dot-loader.component';

describe('DotLoaderComponent', () => {
  let component: DotLoaderComponent;
  let fixture: ComponentFixture<DotLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
