import {Ability} from '../shared/ability.def';

export class Hamster {
  constructor(
    private name: string,
    private description: string,
    private imagePath: string,
    private abilities: Ability[]
  ) {

  }
}
