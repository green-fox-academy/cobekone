'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center

function toCenter(x: number, y:number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = 'green';
    ctx.stroke();
}

toCenter (300, 300)

for (let i = 0; i <= canvas.width / 20; i++) {
    toCenter (20 * i, 0)
}
for (let i = 0; i <= canvas.width / 20; i++) {
    toCenter (20 * i, canvas.height)
}
for (let i = 0; i <= canvas.height / 20; i++) {
    toCenter (0, 20 * i)
}
for (let i = 0; i <= canvas.height / 20; i++) {
    toCenter (canvas.width, 20 * i)
}