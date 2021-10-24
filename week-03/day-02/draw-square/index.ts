'use strict';


let lineCount: number = 9;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is



export function drawSquare(lineCount: number) {

    let horizontal: string = "";
    let vertical: string = "%";

    for (let a = 0; a < lineCount; a++) {
        horizontal = horizontal + "%";
    }
console.log (horizontal)

for (let b = 0; b < lineCount - 2; b++) {
    vertical = vertical + " ";
}

vertical = vertical + "%";

for (let c = 0; c < lineCount - 2; c++) {
    console.log (vertical)
}

console.log (horizontal)

}
drawSquare (lineCount)