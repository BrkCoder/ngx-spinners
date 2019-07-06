import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipLoaderComponent } from './clip-loader.component';

describe('ClipLoaderComponent', () => {
  let component: ClipLoaderComponent;
  let fixture: ComponentFixture<ClipLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
