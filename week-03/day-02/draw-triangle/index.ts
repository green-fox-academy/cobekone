'use strict';

let lineCount: number = 14;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let stars: string = ""

for (let a = 0; a < lineCount; a++) {
  stars = stars + "*"
  console.log (stars)
  
}