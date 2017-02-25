import { Component, OnInit } from '@angular/core';
import { Ability } from '../shared/ability.def';
import { ShopingListService } from '../services/shoping-list-service';

@Component({
  selector: 'hb-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})

export class ShopingListComponent implements OnInit {
  private abilities: Ability[];

  constructor(
    private ShopingListService: ShopingListService
  ) {
    this.abilities = [];
  }

  ngOnInit() {
    this.abilities = this.ShopingListService.getAbilities();
  }

}
