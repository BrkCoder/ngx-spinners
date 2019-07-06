import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbingBoxLoaderComponent } from './climbing-box-loader.component';

describe('ClimbingBoxLoaderComponent', () => {
  let component: ClimbingBoxLoaderComponent;
  let fixture: ComponentFixture<ClimbingBoxLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbingBoxLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbingBoxLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
