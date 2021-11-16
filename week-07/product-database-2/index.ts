'use strict'

let shop: { [key: string]: number } = {
'Eggs': 200,
'Milk': 200,
'Fish': 400,
'Apples': 150,
'Bread': 50,
'Chicken': 550,
}

for(const [key, value] of Object.entries(shop)) {

  if (value < 201) {
        console.log (key)
    }
    
};

for(const [key, value] of Object.entries(shop)) {

    if (value > 150) {
          console.log (key + ': ' + value)
      }
      
  };
  