/* Given base and n that are both 1 or more, write a recursive method (no loops) 
which returns the value of base to the n-th power, so powerN(3, 2) is 9 (3 squared). */

function power(base:number, n:number):number {
    if (n === 0) {
        return 1;
    }
    return base * (power(base, n-1))
}

console.log(power(3, 4))