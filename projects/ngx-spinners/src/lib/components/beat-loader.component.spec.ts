import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatLoaderComponent } from './beat-loader.component';

describe('BeatLoaderComponent', () => {
  let component: BeatLoaderComponent;
  let fixture: ComponentFixture<BeatLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
