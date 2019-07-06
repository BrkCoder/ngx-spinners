import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareLoaderComponent } from './square-loader.component';

describe('SquareLoaderComponent', () => {
  let component: SquareLoaderComponent;
  let fixture: ComponentFixture<SquareLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
