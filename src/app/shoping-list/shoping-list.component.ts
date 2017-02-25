import { Component, OnInit } from '@angular/core';
import { Ability } from '../shared/ability.def';

@Component({
  selector: 'hb-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {
  private ability: Ability[];

  constructor() {
    this.ability = [];
  }

  ngOnInit() {
  }

}
