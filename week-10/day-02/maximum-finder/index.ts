function maximumFinder(inputArray:number[]):number[] {
    
    if (inputArray.length === 1) {
        return inputArray;
    }
    
    if (inputArray[0] > inputArray[1]) {
        inputArray.splice(1, 1)
       return maximumFinder(inputArray)
   } else 
        inputArray.splice(0, 1)
        return maximumFinder(inputArray)
}

let randomArray: number[] = [1, 10, 3, 4]
console.log(maximumFinder(randomArray))