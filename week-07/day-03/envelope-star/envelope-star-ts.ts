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


//bal alsó kvadráns
for (let i = 1, j = 20; i <= 20 && j >= 1 ; i++ && j-- ) {
    drawLine (i * 10 +100, 200, 300, i * 10 +200, 'green')
    console.log ('i: ' + i)
    console.log ('j: ' + j)
}

//jobb alsó kvadráns
for (let i = 1, j = 20; i <= 20 && j >= 1 ; i++ && j-- ) {
    drawLine (j * 10 +300, 200, 300, i * 10 +200, 'red')
    console.log ('i: ' + i)
    console.log ('j: ' + j)
}

//jobb felső kvadráns
for (let i = 1, j = 20; i <= 20 && j >= 1 ; i++ && j-- ) {
    drawLine (300, i * 10, i * 10 + 300, 200, 'purple')
    console.log ('i: ' + i)
    console.log ('j: ' + j)
}
//bal felső kvadráns
for (let i = 1, j = 20; i <= 20 && j >= 1 ; i++ && j-- ) {
    drawLine (300, i * 10, j * 10 + 100, 200, 'cyan')
    console.log ('i: ' + i)
    console.log ('j: ' + j)
}



