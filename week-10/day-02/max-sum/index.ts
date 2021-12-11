function maxSum(inputArray:number[]):number {
    let nextInputArray: number[] = [];
    nextInputArray.push(...inputArray)
    nextInputArray.splice(0,1)
    nextInputArray[4] = inputArray[0]
    let inputArraySum:number = inputArray[0] + inputArray[1] + inputArray[2] + inputArray[3]; 
    let smallestElement:number = inputArray[0];

    //Smallest element of the array, sadly I don't know any other method than using a for loop here... 
    //The sort function basically would be the same...
    //Another recursive min value finder would be a little bit overkill in my opinion.
    for (let i = 0; i < inputArray.length; i++) {
        if (smallestElement > inputArray[i]) {
            smallestElement = inputArray[i]
        }
    }

    //At least the largest sum method is recursive... the base case depends on the for loop :(
    if (inputArray[inputArray.length-1] === smallestElement) {
        return inputArraySum
    }
    if (maxSum(nextInputArray) > inputArraySum) {
        
        return maxSum(nextInputArray);
    }
    return inputArraySum
}

let toInputArray: number[] = [2, 1, 12, 6, 0]
console.log(maxSum(toInputArray))

//Another solution: arrange the array in a way to have the smallest number on the first or last
//position in the array, and return the sum of the first or last 4 elements of the array.
//Maybe this way it can be done without a for loop... If I finish other tasks maybe I will return to this one :)