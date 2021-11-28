// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file's content
import * as fs from 'fs';

function ticTacResult(input:string) {
    let fileData = fs.readFileSync(input, 'utf-8').split('\r\n');
/*     console.log(fileData) */
/*     console.log(fileData.indexOf('OXX')) */

    for (let i = 0; i < 3; i++) {
        
            fileData = [...fileData, fileData[0][i] + fileData[1][i] + fileData[2][i] ]
                      
    }
    fileData = [...fileData, fileData[0][0] + fileData[1][1] + fileData[2][2], fileData[0][2] + fileData[1][1] + fileData[2][0]]
    
/*     let result: string = ''; */
    if (fileData.indexOf('XXX') !== -1) {
        return('X')
    }else if (fileData.indexOf('OOO') !== -1) {
        return('O')
    }else{
        return('Draw')
    }
/*     console.log(fileData) */

}



console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"