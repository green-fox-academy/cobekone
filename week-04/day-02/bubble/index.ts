//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

function advancedBubble(input1:number[], input2?:boolean) {
    if (input2 === false) {
        input1.sort((a, b) => a - b)
    }else {
        input1.sort((a, b) => b - a)
    }
    return(input1)
}

console.log(advancedBubble([34, 12, 24, 9, 5], false));

