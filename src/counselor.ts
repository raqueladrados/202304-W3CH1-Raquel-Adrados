import { Character } from "./character.js";

export class Counselor extends Character {
  constructor(name, house, age, characterAdvised) {
    super(name, house, age);
    this.characterAdvised = characterAdvised;
    this.communicate = "I think I'll be dying soon";
  }
}
