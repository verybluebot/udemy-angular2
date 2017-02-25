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
}
