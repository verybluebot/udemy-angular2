import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamsterListComponent } from './hamster-list.component';

describe('HamsterListComponent', () => {
  let component: HamsterListComponent;
  let fixture: ComponentFixture<HamsterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamsterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamsterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
