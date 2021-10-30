// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

function sum(a:number) {
    let sumofnumbers: number = 0;
   for (let b = 0; b <= a; b++) {
       sumofnumbers += b;
   } 
   console.log(sumofnumbers)
}

sum(100)