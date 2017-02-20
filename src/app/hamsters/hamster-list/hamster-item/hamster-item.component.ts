import { Component, OnInit, Input } from '@angular/core';
import { Hamster } from '../../hamster.def';

@Component({
  selector: 'hb-hamster-item',
  templateUrl: './hamster-item.component.html',
  styleUrls: ['./hamster-item.component.scss']
})
export class HamsterItemComponent implements OnInit {
  @Input() hamster: Hamster;
  hamasterId: number;

  constructor() { }

  ngOnInit() {
  }


}
