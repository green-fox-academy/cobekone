
// Create a method that decrypts reversed-lines.txt

import * as fs from 'fs';

let fileContent: string = fs.readFileSync('reversed-lines.txt', 'utf-8')
            let filecontentSplitted = ['']
            filecontentSplitted = fileContent.split('\r\n')
            let reversed = [''];

            let splittedline = [''];
            let splittedlineReversed = [''];

            for (let i = 0; i < filecontentSplitted.length; i++) {
                splittedline.length = 0;
                splittedline = filecontentSplitted[i].split('');
                splittedlineReversed.length = 0;
                for (let j = 0, k = splittedline.length; j < splittedline.length && k > 0; j++, k--) {
                    splittedlineReversed[j] = splittedline[k-1]
                    reversed[i] = splittedlineReversed.join('')
                }
                
            }

console.log(reversed)