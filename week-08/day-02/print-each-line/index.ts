// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"

/* import fs = require('fs');
const fs = require('fs'); */
import * as fs from 'fs';

function printFile(input:string) {
    
try {
    let fileContent = fs.readFileSync(input, 'utf-8') 
    console.log(fileContent)
} catch (error) {
    console.log('Unable to read file: my-file.txt')
}
}

printFile('my-file.txt')