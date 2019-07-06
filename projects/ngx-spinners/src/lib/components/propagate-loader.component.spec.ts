import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagateLoaderComponent } from './propagate-loader.component';

describe('PropagateLoaderComponent', () => {
  let component: PropagateLoaderComponent;
  let fixture: ComponentFixture<PropagateLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropagateLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropagateLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
