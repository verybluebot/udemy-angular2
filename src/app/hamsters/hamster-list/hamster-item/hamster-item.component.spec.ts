import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamsterItemComponent } from './hamster-item.component';

describe('HamsterItemComponent', () => {
  let component: HamsterItemComponent;
  let fixture: ComponentFixture<HamsterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamsterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamsterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
