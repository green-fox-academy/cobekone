'use strict';


let lineCount: number = 20;
let stars: string = "";
let spaces: string = "";



for (let a = 0; a < lineCount; a++) {

  if (a < lineCount / 2) {
  
    spaces = "";
    stars = "";

    for (let b = lineCount; b > a + (lineCount / 2) + 1; b--) {
      spaces = spaces + " ";
    }

    for (let c = 0; c <= a * 2; c++) {
      stars = stars + "*";
}   
  console.log (spaces + stars)
}

else {
  spaces = "";
  stars = "";

  for (let b = 2 * (lineCount - a); b >= 2; b --) {
    stars = stars + "*";
  }

  for (let c = 0; c < a - lineCount / 2; c++) {
    spaces = spaces + " ";
}   
console.log (spaces + stars)

}

}

