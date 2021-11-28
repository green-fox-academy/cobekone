// Create a method that decrypts reversed-order.txt

import * as fs from 'fs';

let input = fs.readFileSync('reversed-order.txt', 'utf-8');
let filecontentSplitted = [''];
filecontentSplitted = input.split('\r\n')
console.log(filecontentSplitted)

let reversed = [''];

for (let j = 0, k = filecontentSplitted.length; j < filecontentSplitted.length && k > 0; j++, k--) {
    reversed[j] = filecontentSplitted[k-1]
}
console.log(reversed.join('\r\n'))