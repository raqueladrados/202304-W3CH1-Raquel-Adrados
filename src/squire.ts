import { Character } from "./character.js";

export class Squire extends Character {
  knight;
  pelotismo;
  constructor(
    name: string,
    house: string,
    age: number,
    knight: string,
    pelotismo: number
  ) {
    super(name, house, age);
    this.knight = knight;
    this.pelotismo = pelotismo;
    this.comunicate = "I'm a loser";
  }
}
