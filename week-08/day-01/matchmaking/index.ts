'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Expected output: ["Eve-Joe", "Ashley-Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function match(list1:string[], list2: string[]) {
    
    let matched: string[][] = [];

    let longer: number = 0
    if (list1.length >= list2.length) {
        longer = list1.length
    }   else {
        longer = list2.length
    }

    for (let i = 0; i < longer; i++) {
             
        matched = [...matched, [list1[i], list2[i]]]
    }
    return (matched)

}






console.log(match(girls, boys));

export = match;