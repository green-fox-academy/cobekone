'use strict';

let lineCount: number = 16;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

    let horizontal: string = "";
    let diagonal: string = "%";
    let elfogyoSpace: string = "";
    let novekvoSpace: string = "";

    for (let a = 0; a < lineCount; a++) {
        horizontal = horizontal + "%";
    }
console.log (horizontal)
//Ez a középső rész befoglalója
for (let b = 0; b < lineCount - 2; b++) {
    novekvoSpace = "";
    elfogyoSpace = "";
    

//Ez a növekvő Space
for (let d = 0; d < b; d++) {
    novekvoSpace = novekvoSpace + " ";
    
}
//Ez a csökkenő Space
for (let d = lineCount - b; d > 3; d--) {
    elfogyoSpace = elfogyoSpace + " ";
    
}

diagonal = "%" + novekvoSpace + "%" + elfogyoSpace + "%";
console.log (diagonal)
}

console.log (horizontal)