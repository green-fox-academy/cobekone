import { Instrument } from "./Instrument";

export abstract class StringedInstruments extends Instrument {
  numberOfStrings: number;
  constructor(numberOfStrings: number, name: string) {
    super(name);
    this.name = name;
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound(): void;
  play(): void {
    console.log(
      this.name +
        ", a " +
        this.numberOfStrings +
        "-stringed instrument that goes " +
        this.sound()
    );
  }
}
