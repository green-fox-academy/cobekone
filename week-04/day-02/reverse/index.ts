// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

'use strict'

let numbers: number[] = [3, 4, 5, 6, 7];

numbers.reverse();
console.log (numbers);

numbers = [3, 4, 5, 6, 7];
let numbers2: number[] = [];
let numbers2Length: number = numbers.length - 1;

for (let i = 0; i < numbers.length; i++) {
    numbers2.push (numbers[numbers2Length]);
    numbers2Length--;
}


console.log (numbers2)