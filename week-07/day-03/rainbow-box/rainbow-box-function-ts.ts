'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function centerSquare(size:number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size)
}

/* centerSquare (200, 'yellow')
centerSquare (120, 'green')
centerSquare (50, 'red') */

let currentSize: number = 600;

for (let i = 9; i > 0; i--) {
    centerSquare(currentSize, "#ff0000")
    currentSize = currentSize - 10;  
    console.log (currentSize)
    centerSquare(currentSize, "#ffa500")  
    currentSize = currentSize - 10;  
    console.log (currentSize)
    centerSquare(currentSize, "#ffff00")  
    currentSize = currentSize - 10;  
    console.log (currentSize)
    centerSquare(currentSize, "#008000")  
    currentSize = currentSize - 10;  
    centerSquare(currentSize, "#0000ff")  
    currentSize = currentSize - 10;  
    centerSquare(currentSize, "#4b0082")  
    currentSize = currentSize - 10;  
    centerSquare(currentSize, "#ee82ee")  
    currentSize = currentSize - 10;  
}
   /*  centerSquare(i * 10, 'rgba(' + 255 / i +', ' + 4.25 * i +', ' + 255/i +', 1)')
 */