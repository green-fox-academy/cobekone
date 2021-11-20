'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center

function drawLine(x1: number, y1:number, x2: number, y2:number, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
}

for (let i = 1, j = 20; i <= 20 && j >= 1 ; i++ && j-- ) {
    drawLine (i * 15, 0, 300, i * 15, 'green')
    console.log ('i: ' + i)
    console.log ('j: ' + j)
}

for (let i = 1, j = 20; i <= 20 && j >= 1 ; i++ && j-- ) {
    drawLine (0, i * 15, i * 15, 300, 'purple')
    console.log ('i: ' + i)
    console.log ('j: ' + j)
}



