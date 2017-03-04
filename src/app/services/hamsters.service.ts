import { Injectable } from '@angular/core';
import { Hamster } from '../hamsters/hamster.def';
import { Ability } from '../shared/ability.def';

@Injectable()
export class HamstersService {
  hamsters: Hamster[];

  constructor() {
    this.hamsters = [
      new Hamster('Shwartzenster', 'this hamster is killing it', 'http://www.shortday.in/wp-content/uploads/2015/08/cute-hamster-Photos.jpg', [
        new Ability('fire from eyes', 'shooting fire from the eyes', 5, 'no image'),
        new Ability('icing', 'can turn targets to ice by look', 6, 'no image')
      ]),
      new Hamster('Yokozuna', 'this is the biggest hamster around', 'http://i.imgur.com/E6iuJEs.jpg', [])
    ];
  }

  getHamsters() {
    return this.hamsters;
  }

  // this is protected in a shitty way because I asume that the id will not go out of range of 'hamsters' array.
  // and, as this moment it doesnt because it comes from the 'hamsters' itartion on the list page...but one day...it will
  // be changed and then this is fucked
  getHamster(id: number) {
    return this.hamsters[id];
  }

  deleteHamster(hamster: Hamster) {
    this.hamsters.splice(this.hamsters.indexOf(hamster), 1);
  }
}
