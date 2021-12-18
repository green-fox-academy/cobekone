import { Printable } from "./Printable";

export class Domino implements Printable {
  firstSide: number;
  secondSide: number;
  constructor(firstSide: number, secondSide: number) {
    this.firstSide = firstSide;
    this.secondSide = secondSide;
  }
  printAllFields() {
    console.log(
      "Domino A side: " + this.firstSide + ", B side: " + this.secondSide
    );
  }
}

export class Dominoes {
  dominoes: any[] = [];
  addDominoes(domino: Domino) {
    this.dominoes.push(domino);
  }
}
