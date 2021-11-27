'use strict';
// Accidentally I messed up this quote from Richard Feynman
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// To do this: create a method called "swapQuote()"

// Also, log the sentence to the console with spaces in between

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
console.log(swapQuote(words));
// Expected output: "What I cannot create I do not understand."

export = swapQuote;

function swapQuote (list: string[]){
    [list[2], list[5]] = [list[5], list[2]]
    return (list.join(' '))
}
