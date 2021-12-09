function gsd(num1:number, num2:number):number {
    let dividedResult = num1 / num2
    let dividedRemaining = num1 % num2

    if (dividedRemaining === 0) {
        return num2;
    }
    return gsd(num2, dividedRemaining)
}

console.log(gsd(18, 84))