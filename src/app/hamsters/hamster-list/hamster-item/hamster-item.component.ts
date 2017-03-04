import { Component, Input } from '@angular/core';
import { Hamster } from '../../hamster.def';

@Component({
  selector: 'hb-hamster-item',
  templateUrl: './hamster-item.component.html',
  styleUrls: ['./hamster-item.component.scss']
})
export class HamsterItemComponent {
  @Input() hamster: Hamster;
  @Input() hamsterId: number;

  constructor() { }
}
