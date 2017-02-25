import { Ability } from '../shared/ability.def';

export class Hamster {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public abilities: Ability[]
  ) {

  }
}
