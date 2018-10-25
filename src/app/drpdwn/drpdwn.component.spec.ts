import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrpdwnComponent } from './drpdwn.component';

describe('DrpdwnComponent', () => {
  let component: DrpdwnComponent;
  let fixture: ComponentFixture<DrpdwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrpdwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrpdwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
