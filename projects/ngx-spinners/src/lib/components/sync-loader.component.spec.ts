import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncLoaderComponent } from './sync-loader.component';

describe('SyncLoaderComponent', () => {
  let component: SyncLoaderComponent;
  let fixture: ComponentFixture<SyncLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
