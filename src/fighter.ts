import { Character } from "./character.js";

export class Fighter extends Character {
  weapon;
  skills;
  constructor(
    name: string,
    house: string,
    age: number,
    weapon: string,
    skills: number
  ) {
    super(name, house, age);
    this.weapon = weapon;
    this.skills = skills;
    this.comunicate = "First hit, then ask";
  }
}
