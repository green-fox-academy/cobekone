function bunnyEars(noOfBunnies:number):number {
    if (noOfBunnies === 1) {
        return 3;
    }else if(noOfBunnies <=1){
        return 0
    }
    else if (noOfBunnies%2 === 1){
        return 3 + (bunnyEars(noOfBunnies-1))
    }
    return 2 + (bunnyEars(noOfBunnies-1))
}

console.log(bunnyEars(5))