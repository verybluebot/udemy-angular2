import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ShopingListService } from '../../services/shoping-list-service';
import { Ability } from '../../shared/ability.def';

@Component({
  selector: 'hb-shoping-list-add',
  templateUrl: './shoping-list-add.component.html',
  styleUrls: ['./shoping-list-add.component.scss']
})

export class ShopingListAddComponent implements OnChanges {
  isAdd: boolean = true;

  @Input() ability: Ability;

  @Output() cleared: EventEmitter<any> = new EventEmitter();

  constructor(
    private ShoppingListService: ShopingListService,
  ) {

  }

  ngOnChanges(changes) {
    if (changes.ability.currentValue === null) {
      this.isAdd = true;
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(value: Ability) {
    if (!+value.level) return alert('level must be a number you fucking cunt');

    // TODO: this should be converted to the full ability data after the html will support that
    const newAbility = new Ability(value.name, '', +value.level, '');
    // adding new item
    if (this.isAdd) {
      this.ShoppingListService.addAbility(newAbility);
    }

    // if item is edited
    if (!this.isAdd) {
      this.ShoppingListService.editAbility(this.ability ,newAbility)
      this.onClear();
    }
  }

  onDelete(item) {
    this.ShoppingListService.deleteAbility(item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}
