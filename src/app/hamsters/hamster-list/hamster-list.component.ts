import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hamster } from '../hamster.def';
import { HamstersService } from '../../services/hamsters.service';
import { ShopingListService } from '../../services/shoping-list-service';

@Component({
  selector: 'hb-hamster-list',
  templateUrl: './hamster-list.component.html',
  styleUrls: ['./hamster-list.component.scss']
})

export class HamsterListComponent implements OnInit {
  hamsters: Hamster[];
  // @Output() hamsterSelected = new EventEmitter<Hamster>();

  constructor(
    private HamstersService: HamstersService,
    private ShopingListService: ShopingListService
  ) {
    this.hamsters = [];
  }

  ngOnInit() {
    this.hamsters = this.HamstersService.getHamsters()
  }

  onSelected(hamster: Hamster) {
    // this.hamsterSelected.emit(hamster);
  }

  addAbilities() {
    // this.ShopingListService.addAbilities();
  }

}
