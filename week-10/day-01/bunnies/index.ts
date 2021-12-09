function bunnyEars(noOfBunnies:number):number {
    if (noOfBunnies === 1) {
        return 2;
    }else if(noOfBunnies <=1){
        return 0
    }
    else{
        return 2 + (bunnyEars(noOfBunnies-1))
    }
}

console.log(bunnyEars(0))