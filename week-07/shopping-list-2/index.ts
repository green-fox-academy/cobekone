let shop: any = {'Milk': 1.07,
'Rice': 1.59,
'Eggs': 3.14,
'Cheese': 12.6,
'Chicken Breasts': 9.40,
'Apples': 2.31,
'Tomato': 2.58,
'Potato': 1.75,
'Onion': 1.10,
}

let shoppingListBob: any = {'Milk': 3,
'Eggs': 2,
'Rice': 2,
'Cheese': 1,
'Chicken Breasts': 4,
'Apples': 1,
'Tomato': 2,
'Potato': 1,
}

let shoppingListAlice: any = {'Rice': 1,
'Eggs': 5,
'Chicken Breasts': 2,
'Apples': 1,
'Tomato': 10,
}

let toPay: number = 0;

for (const [key, value] of Object.entries(shoppingListBob)) {
    
    toPay += shoppingListBob[key] * shop[key];    
  }

  console.log(toPay);



toPay = 0;

for (const [key, value] of Object.entries(shoppingListAlice)) {
    
    toPay += shoppingListAlice[key] * shop[key];    
  }

  console.log(toPay);

  if (shoppingListBob['Rice'] > shoppingListAlice['Rice']) {
      console.log ('Bob buys more')
    } else {
      console.log ('Alice buys more')      
  }

  if (shoppingListBob['Potato'] > shoppingListAlice['Potato']) {
    console.log ('Bob buys more')
  } else {
    console.log ('Alice buys more')      
}

if (Object.keys(shoppingListBob).length > Object.keys(shoppingListAlice).length) {
    console.log ('Bob buys more different products')
  } else {
    console.log ('Alice buys more different products')      
}




let sumOfBobProducts: any = 0;
for (const [key, value] of Object.entries(shoppingListBob)) {
    
    sumOfBobProducts += value;    
  }
/* console.log (sumOfBobProducts) */

let sumOfAliceProducts: any = 0;
for (const [key, value] of Object.entries(shoppingListAlice)) {
    
    sumOfAliceProducts += value;    
  }
/* console.log (sumOfAliceProducts) */

if (sumOfBobProducts > sumOfAliceProducts) {
    console.log ('Bob buys more in quantity')
  } else {
    console.log ('Alice buys more in quantity')      
}