import { Character } from "./character.js";

export class Counselor extends Character {
  characterAdvised;
  constructor(
    name: string,
    house: string,
    age: number,
    characterAdvised: string
  ) {
    super(name, house, age);
    this.characterAdvised = characterAdvised;
    this.comunicate = "I think I'll be dying soon";
  }
}
