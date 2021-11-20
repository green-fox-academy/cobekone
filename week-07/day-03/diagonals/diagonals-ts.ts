'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

function drawLine(x1: number, y1: number, x2: number, y2: number) {
    ctx.beginPath();
ctx.moveTo(x1, y1);

if (x1 === 0 && y1 === 0) {
    ctx.strokeStyle = 'green';
    } else {
    ctx.strokeStyle = 'red';
    }
ctx.lineTo(x2, y2)
ctx.stroke();
}

drawLine (0,0,canvas.width,canvas.height)
drawLine (canvas.width,0,0,canvas.height)