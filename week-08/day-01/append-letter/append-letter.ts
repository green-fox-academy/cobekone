'use strict';
// Create a function called "appendA()" that adds "a" to every string in the "animals" list
// The parameter should be a list

let animals: string[] = ['koal', 'pand', 'zebr', 'anacond', 'bo', 'chinchill', 'cobr', 'gorill', 'hyen', 'hydr', 'iguan', 'impal', 'pum', 'tarantul', 'pirahn'];

function appendA(list:string[]) {
    
    for (let i = 0; i < list.length; i++) {
        list[i] = list[i] + 'a'
        }
        return (list)
}


console.log(appendA(animals));

// The output should be: "koala", "panda", "zebra" ...

export = appendA;