'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called repairSweets() which takes the list as a parameter
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function repairSweets(list:any[]) {
    
    list[1] = 'Croissant'
    list[3] = 'Ice cream'
    return (list)
}

console.log (repairSweets(shopItems))
export = repairSweets;