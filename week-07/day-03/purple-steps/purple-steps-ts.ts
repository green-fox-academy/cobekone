'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function drawRect(x, y) {
    ctx.fillStyle = 'purple'
    ctx.fillRect(x, y, 20, 20)
    ctx.strokeRect(x, y, 20, 20)
}

let nextXCoord: number = 0;
let nextYCoord: number = 0;

for (let i = 0; i < 15; i++) {
    drawRect(nextXCoord, nextYCoord)
    nextXCoord += 20
    nextYCoord += 20
}