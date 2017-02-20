import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListAddComponent } from './shoping-list-add.component';

describe('ShopingListAddComponent', () => {
  let component: ShopingListAddComponent;
  let fixture: ComponentFixture<ShopingListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
