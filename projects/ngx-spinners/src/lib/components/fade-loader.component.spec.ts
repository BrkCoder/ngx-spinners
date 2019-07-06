import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeLoaderComponent } from './fade-loader.component';

describe('FadeLoaderComponent', () => {
  let component: FadeLoaderComponent;
  let fixture: ComponentFixture<FadeLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
