'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

// let keyword: string = "valami";
// let str: string = "a a a b b valami a a";

function substr(str: string, keyword: string) {
    if ((str.search (keyword)) === -1) {
        console.log ("A \"" + keyword + "\" nem található!")

    } else {
    console.log ("A \""+ keyword + "\" a " + str.search (keyword) + ". karakternél található.")
        
    }
}

//  Example

// should print: `17`
console.log ("eredmenyes kereses:");
console.log (substr("this is what I'm searching in", "searching"));


// should print: `-1`
console.log ("eredmenytelen kereses:")
console.log(substr("this is what I'm searching in", "not"));

