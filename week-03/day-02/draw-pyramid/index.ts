'use strict';

let lineCount: number = 10;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let stars: string = "";
let spaces: string = "";

for (let a = 0; a < lineCount; a++) {

    spaces = "";
    stars = "";

    for (let b = lineCount; b > 0 + a; b--) {
      spaces = spaces + " ";
      
    }

    for (let c = 0; c <= a * 2; c++) {
      stars = stars + "*";
  
}
    
  console.log (spaces + stars)

}
