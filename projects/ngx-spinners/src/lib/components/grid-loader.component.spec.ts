import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLoaderComponent } from './grid-loader.component';

describe('GridLoaderComponent', () => {
  let component: GridLoaderComponent;
  let fixture: ComponentFixture<GridLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
