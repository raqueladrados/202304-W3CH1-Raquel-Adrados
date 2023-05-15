import { Character } from "./character.js";

export class King extends Character {
  constructor(name, house, age, rulingYears) {
    super(name, house, age);
    this.rulingYears = rulingYears;
    this.communicate = "You're all gonna die";
  }
}
