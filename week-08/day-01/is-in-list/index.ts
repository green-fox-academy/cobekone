'use strict';
// Check if "listOfNumbers" contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// It should return "true" if it contains all elements, otherwise returns "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(checkNums(listOfNumbers));

export = checkNums;

function checkNums(list:number[]) {
    if (list.indexOf(4) != -1 && list.indexOf(8) != -1 && list.indexOf(12) != -1 && list.indexOf(6) != -1) {
        return (true)
    }else{
        return (false)
    }
}