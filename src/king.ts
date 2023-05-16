import { Character } from "./character.js";

export class King extends Character {
  rulingYears;
  constructor(name: string, house: string, age: number, rulingYears: number) {
    super(name, house, age);
    this.rulingYears = rulingYears;
    this.comunicate = "You're all gonna die";
  }
}
