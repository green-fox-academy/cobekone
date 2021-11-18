/* We are going to represent a shopping list in a list containing strings.

Create a list with the following items:
ˇ"eggs", "milk", "fish", "apples", "bread" and "chicken"
Create an application which prints out the answers to the following questions:
Do we have milk on the list?
Do we have bananas on the list? */
'use strict'

let list: string[] = ["eggs", "milk", "fish", "apples", "bread", "chicken"]

if (list.indexOf('milk') != -1) {
    console.log ('We have milk')    
} else {
    console.log ('We don\'t have milk')
}

if (list.indexOf('bananas') != -1) {
    console.log ('We have banana')    
} else {
    console.log ('We don\'t have banana')
}