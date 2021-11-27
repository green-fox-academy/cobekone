// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

import * as fs from 'fs';

export function countLines(input:string) {

    try {
            let fileContent: string = fs.readFileSync(input, 'utf-8')
            let filecontentSplitted = ['']
            filecontentSplitted = fileContent.split('\r\n')
            console.log (filecontentSplitted.length)
            return (filecontentSplitted.length)
        
    } catch (error) {
        console.log (0);
        return 0;
    }
}

countLines('my-file.txt')