import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonLoaderComponent } from './moon-loader.component';

describe('MoonLoaderComponent', () => {
  let component: MoonLoaderComponent;
  let fixture: ComponentFixture<MoonLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoonLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
