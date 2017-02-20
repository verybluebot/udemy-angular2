import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamsterDetailComponent } from './hamster-detail.component';

describe('HamsterDetailComponent', () => {
  let component: HamsterDetailComponent;
  let fixture: ComponentFixture<HamsterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamsterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamsterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
