// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test

'use strict'

let numbers: number[] = [1, 2, 3, 4, 5, 6]

numbers.map((value: number, index: number) => {
if (index === 3) {
    value = 4;
}
})

console.log (numbers)