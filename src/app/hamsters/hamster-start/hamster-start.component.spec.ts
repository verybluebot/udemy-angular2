import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamsterStartComponent } from './hamster-start.component';

describe('HamsterStartComponent', () => {
  let component: HamsterStartComponent;
  let fixture: ComponentFixture<HamsterStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamsterStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamsterStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
