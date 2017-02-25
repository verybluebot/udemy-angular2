import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hamster } from '../hamster.def';

@Component({
  selector: 'hb-hamster-list',
  templateUrl: './hamster-list.component.html',
  styleUrls: ['./hamster-list.component.scss']
})
export class HamsterListComponent implements OnInit {
  hamsters: Hamster[];
  @Output() hamsterSelected = new EventEmitter<Hamster>();

  constructor() {
    this.hamsters = [
      new Hamster('Shwartzenster', 'this hamster is killing it', 'http://www.shortday.in/wp-content/uploads/2015/08/cute-hamster-Photos.jpg', []),
      new Hamster('Yokozuna', 'this is the biggest hamster around', 'http://i.imgur.com/E6iuJEs.jpg', [])
    ];
  }

  ngOnInit() {
  }

  onSelected(hamster: Hamster) {
    this.hamsterSelected.emit(hamster);
  }

}
