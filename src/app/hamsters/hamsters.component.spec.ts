import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamstersComponent } from './hamsters.component';

describe('HamstersComponent', () => {
  let component: HamstersComponent;
  let fixture: ComponentFixture<HamstersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamstersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
