'use strict'

let shop: any = {
'Eggs': 200,
'Milk': 200,
'Fish': 400,
'Apples': 150,
'Bread': 50,
'Chicken': 550,
}

console.log (shop['Fish'])

let onlyPricesArray: number[] = Object.values(shop)


console.log (onlyPricesArray)

onlyPricesArray.sort((a, b) => a - b)
console.log (onlyPricesArray[onlyPricesArray.length - 1])

let sumOfPrices: number = 0;
onlyPricesArray.forEach(value => {
    sumOfPrices += value;
});

console.log (sumOfPrices / onlyPricesArray.length)

let howManySmaller: number = 0;
for (let i = 0; i < onlyPricesArray.length; i++) {
    if (onlyPricesArray[i] < 300) {
        howManySmaller += 1;
    }
}
console.log (howManySmaller)

if (onlyPricesArray.indexOf(125) != -1) {
    console.log ('Yes')
}else{
console.log ('No')
}

console.log (onlyPricesArray[0])