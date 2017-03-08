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

  addAbility(item: Ability) {
    this.abilities.push(item);
  }

  editAbility(oldItem: Ability, newItem: Ability) {
    this.abilities[this.abilities.indexOf(oldItem)] = newItem;
  }

  deleteAbility(item: Ability) {
    this.abilities.splice(this.abilities.indexOf(item), 1);
  }
}
