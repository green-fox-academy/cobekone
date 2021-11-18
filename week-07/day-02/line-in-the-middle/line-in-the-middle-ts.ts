'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the center of the canvas
// draw a green vertical line to the center of the canvas

ctx.beginPath();
ctx.moveTo(0, canvas.height / 2);
ctx.strokeStyle = 'red';
ctx.lineTo(canvas.width / 2, canvas.height / 2)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width / 2, 0);
ctx.strokeStyle = 'green';
ctx.lineTo(canvas.width / 2, canvas.height / 2)
ctx.stroke();
