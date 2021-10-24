'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let lineCount: number = 8;
let paratlanSor: string = "";
let parosSor: string = " ";

for (let b = 0; b < lineCount / 2; b++) {
    paratlanSor = paratlanSor + "% "
}
for (let b = 0; b < lineCount / 2; b++) {
    parosSor = parosSor + "% "
}

for (let a = 0; a < lineCount / 2; a++) {
console.log (paratlanSor)
console.log (parosSor)
    
}