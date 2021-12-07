//Given a non-negative integer n, return the sum of its digits recursively (without loops).


function sumDigits(n:number):number{
    if (n.toString().length === 1) {
        return n;
    }

    return Math.floor(n / Math.pow(10, n.toString().length-1)) + sumDigits(n -  (Math.pow(10, n.toString().length-1) * Math.floor(n / Math.pow(10, n.toString().length-1))));
}

console.log(sumDigits(666666))