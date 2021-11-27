// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

import * as fs from 'fs';



function copyFileContent(fileSource:string, fileDest: string) {

try {
    fs.writeFileSync(fileDest, fs.readFileSync(fileSource, 'utf-8'))
} catch (error) {
    console.log(false)
}
}

copyFileContent('textSource.txt', 'textDest.txt')