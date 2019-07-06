import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiseLoaderComponent } from './rise-loader.component';

describe('RiseLoaderComponent', () => {
  let component: RiseLoaderComponent;
  let fixture: ComponentFixture<RiseLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiseLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiseLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
