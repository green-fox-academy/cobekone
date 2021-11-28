// Read all data from 'log.txt'
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses
// Write a function that returns the GET / POST request ratio

import * as fs from 'fs';

let fileData = fs.readFileSync('log.txt', 'utf-8').split('\r\n');
console.log (fileData)
//console.log(fileData[0][1])
let onlyIP = fs.readFileSync('log.txt', 'utf-8').split('\r\n');
for (let i = 0; i < fileData.length; i++) {
    onlyIP[i]= onlyIP[i].slice(27, 38)
}

let uniqueIP = ['']
uniqueIP = onlyIP.filter((value, index, self) => {
return self.indexOf(value) === index;
})
/* 
console.log(onlyIP) */
console.log('The unique IP\'s are: ')
console.log(uniqueIP)

let getCounter = 0;

for (let i = 0; i < fileData.length; i++) {
    
    if (fileData[i].indexOf('GET') !== -1){
        getCounter += 1;
    }
}

console.log('The GET/POST ratio is: ' + getCounter + '/' + (fileData.length - getCounter))

