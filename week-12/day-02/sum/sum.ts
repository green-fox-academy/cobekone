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

let array1: number[] = [0, 6, 7, 1];
export let calculator1 = new Calculator();

console.log(calculator1.sum(array1));

console.log(calculator1.sum([3, 7]));
