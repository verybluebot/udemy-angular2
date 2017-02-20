import { Component, OnInit, Input } from '@angular/core';
import {Hamster} from '../hamster.def';

@Component({
  selector: 'hb-hamster-detail',
  templateUrl: './hamster-detail.component.html',
  styleUrls: ['./hamster-detail.component.scss']
})
export class HamsterDetailComponent implements OnInit {
  @Input() selectedHamster: Hamster;

  constructor() { }

  ngOnInit() {
  }

}
