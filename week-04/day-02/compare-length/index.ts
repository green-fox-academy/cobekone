// - Create a variable named `firstList`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `secondList`
//   with the following content: `[4, 5]`
// - Log "secondList is longer" to the console if `secondList` has more elements than
//   `firstList`
// - Otherwise log: "firstList is the longer one"

let firstList: number[] = [1, 2, 3];
let secondList: number[] = [4, 5, 6, 7];

if (firstList.length > secondList.length) {
    console.log ("firstList is the longer one")
} else { 
    console.log ("secondList has more elements than firstList")
}
