import { Character } from "./character.js";

export class Fighter extends Character {
  constructor(name, house, age, weapon, skills) {
    super(name, house, age);
    this.weapon = weapon;
    this.skills = skills;
    this.communicate = "First hit, then ask";
  }
}
