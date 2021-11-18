/* We are going to represent our expenses in a list containing integers.

Create a list with the following items:
500, 1000, 1250, 175, 800 and 120
Create an application which prints out the answers to the following questions:
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings? */
'use strict'

let financeList: number[] = [500, 1000, 1250, 175, 800, 120]

console.log ('How much did we spend?')

let sumResult: number = 0;

financeList.forEach((value: number) => {
sumResult += value
})

console.log (sumResult)

//--------------

console.log ('Which was our greatest expense?')

financeList.sort((a, b) => a - b)
console.log (financeList[financeList.length - 1])

console.log ('Which was our cheapest spending?')

console.log (financeList[0])

console.log ('What was the average amount of our spendings?')

console.log (sumResult / financeList.length)