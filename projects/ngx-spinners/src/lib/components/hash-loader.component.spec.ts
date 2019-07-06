import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashLoaderComponent } from './hash-loader.component';

describe('HashLoaderComponent', () => {
  let component: HashLoaderComponent;
  let fixture: ComponentFixture<HashLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
