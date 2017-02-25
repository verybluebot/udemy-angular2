import { Component, OnInit, Input } from '@angular/core';
import { Hamster } from '../hamster.def';
import { ShopingListService } from '../../services/shoping-list-service';

@Component({
  selector: 'hb-hamster-detail',
  templateUrl: './hamster-detail.component.html',
  styleUrls: ['./hamster-detail.component.scss']
})
export class HamsterDetailComponent implements OnInit {
  @Input() selectedHamster: Hamster;

  constructor(
    private ShopingListService: ShopingListService
  ) { }

  ngOnInit() {
  }

  onAdd() {
    this.ShopingListService.addAbilities(this.selectedHamster.abilities)
  }
}
