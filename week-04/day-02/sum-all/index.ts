// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements of `numbers` to the console

let numbers: number[] = [3, 4, 5, 6, 7];
let sum: number = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    
}

console.log (sum)