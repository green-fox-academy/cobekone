// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(a:number) {
    let currentnumber: number = 1;
    for (let b = 1; b <= a; b++) {
        currentnumber *= b;
        
    }
    console.log(currentnumber)
}

calculateFactorial(5)