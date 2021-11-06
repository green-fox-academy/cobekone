
'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
export function reverse(value: string) {
    let splitted: string[] = value.split("");
    let reversed: string[] = [];

    for (let i = 0; i < value.length; i++) {
        reversed[i] = splitted [splitted.length - 1 - i]

    }
    let reversedJoined: string = (reversed.join(''));
    
    return (reversedJoined);
}

console.log(reverse(toBeReversed));