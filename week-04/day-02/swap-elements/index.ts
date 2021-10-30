// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`
'use strict'

let names: string[] = ["Arthur", "Boe", "Chloe"];

[names[2], names[0]] = [names [0], names[2]];

console.log(names)