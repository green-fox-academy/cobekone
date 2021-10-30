//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)

export function findUniqueItems(arr: number[]) {
console.log (arr);
let b = arr.length;
for (let a = 0; a < arr.length; a++) {    
for (let b = arr.length; b > a; b--) {
    if (arr[a] === arr[b]) {
        console.log (arr[a]);
        arr.splice (b, 1);
    }
}}
console.log (arr)
return (arr)
}

//  Example
findUniqueItems([1, 11, 34, 11, 52, 11, 11, 11, 61, 1, 34])
//  should print: `[1, 11, 34, 52, 61]`