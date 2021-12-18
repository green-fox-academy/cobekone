import { StringedInstruments } from "./StringedInstruments";

class ElectricGuitar extends StringedInstruments {
  instrumentSound: string;
  constructor(numberOfStrings: number = 6, name: string = "Electric Guitar") {
    super(numberOfStrings, name);
    this.instrumentSound = "Twang";
    this.numberOfStrings = numberOfStrings;
  }

  sound() {
    return this.instrumentSound;
  }
}

class BassGuitar extends StringedInstruments {
  instrumentSound: string;
  constructor(numberOfStrings: number = 4, name: string = "Bass Guitar") {
    super(numberOfStrings, name);
    this.instrumentSound = "Duum-duum-duum";
    this.numberOfStrings = numberOfStrings;
  }

  sound() {
    return this.instrumentSound;
  }
}

class Violin extends StringedInstruments {
  instrumentSound: string;
  constructor(numberOfStrings: number = 4, name: string = "Violin") {
    super(numberOfStrings, name);
    this.instrumentSound = "Screech";
    this.numberOfStrings = numberOfStrings;
  }

  sound() {
    return this.instrumentSound;
  }
}

console.log(
  "Test 1, create Electric Guitar, Bass Guitar and Violin with default strings."
);
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log("Test 1 Play");
guitar.play();
bassGuitar.play();
violin.play();

console.log(
  "Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings."
);
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log("Test 2 Play");
guitar2.play();
bassGuitar2.play();
