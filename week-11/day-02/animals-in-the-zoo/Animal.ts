export abstract class Animal {
  name: string;
  age: number;
  /*   isMammal: boolean;
  isBird: boolean;
  isReptilian: boolean; */
  constructor(name: string, age: number = 0) {
    this.name = name;
    this.age = age;
    /*     this.isMammal = false;
    this.isBird = false;
    this.isReptilian = false; */
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  abstract breed(): void;
}
