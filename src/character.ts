export class Character {
  static tvShow = "Game of Thrones";
  name;
  house;
  age;
  alive;
  comunicate;
  constructor(name: string, house: string, age: number) {
    this.name = name;
    this.house = house;
    this.age = age;
    this.alive = true;
    this.comunicate = "";
  }

  endLife() {
    this.alive = false;
    return this.alive;
  }

  saySentence() {
    return `${this.comunicate}`;
  }
}
