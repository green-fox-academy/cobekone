'use strict';
let number: number = 152;

export function multiplicationTable(number: number) {

  for (let a = 1; a <= 10; a++) {
      console.log (a + " * " + number + " = " + (a * number))
      
  }
}
multiplicationTable (number)