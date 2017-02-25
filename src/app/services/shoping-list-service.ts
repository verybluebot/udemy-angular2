import { Injectable } from '@angular/core';
import { Ability } from '../shared/ability.def';


@Injectable()
export class ShopingListService {
  abilities: Ability[];

  constructor(
  ) {
    this.abilities = [];
  }

  getAbilities() {
    return this.abilities;
  }

  addAbilities(items: Ability[]) {
    Array.prototype.push.apply(this.abilities, items);
  }
}
