import { Character } from "./character.js";

export class Squire extends Character {
  constructor(name, house, age, knight, pelotismo) {
    super(name, house, age);
    this.knight = knight;
    this.pelotismo = pelotismo;
    this.communicate = "I'm a loser";
  }
}
