// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

import * as fs from 'fs';

export function decryptDoubled(filename:string) {
    
try {
    let input = fs.readFileSync(filename, 'utf-8')
    let inputSplitted = input.split('')
    /* console.log(inputSplitted) */
    let result: any[] = [];
    for (let i = 0; i < inputSplitted.length; i+=2) {
        result.push(inputSplitted[i])
/*         console.log(inputSplitted[i]) */
    }
    let finalResult: string[] = [(result.join(''))]
    console.log(finalResult)
    return (finalResult)
    
} catch (error) {
    console.log ('File not found')
    return ('File not found')
}


}

decryptDoubled('duplicated-chars.txt')