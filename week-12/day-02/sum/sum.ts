export class Calculator {
  constructor() {}

  sum(listOfNumbers: number[]) {
    let sum = 0;
    for (let i = 0; i < listOfNumbers.length; i++) {
      sum += listOfNumbers[i];
    }
    return sum;
  }
}

export let calculator1 = new Calculator();