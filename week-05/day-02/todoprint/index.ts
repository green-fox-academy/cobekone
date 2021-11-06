'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText applying indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

let newText: string = "";

newText = ("My todo: \n" + todoText);
newText = (newText + " - Download games \n");
newText = (newText + "  - Diablo \n");

todoText = newText;

console.log(todoText);