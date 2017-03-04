import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamsterEditComponent } from './hamster-edit.component';

describe('HamsterEditComponent', () => {
  let component: HamsterEditComponent;
  let fixture: ComponentFixture<HamsterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamsterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamsterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
