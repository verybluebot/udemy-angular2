import { Component, OnInit } from '@angular/core';
import {Hamster} from './hamster.def';

@Component({
  selector: 'hb-hamsters',
  templateUrl: './hamsters.component.html',
  styleUrls: ['./hamsters.component.scss']
})
export class HamstersComponent implements OnInit {
  selectedHamster: Hamster;

  constructor() { }

  ngOnInit() {
  }

}
