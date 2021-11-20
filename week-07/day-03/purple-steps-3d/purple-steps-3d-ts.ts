'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function drawRect(x, y, h, w) {
    ctx.fillStyle = 'purple'
    ctx.fillRect(x, y, h, w)
    ctx.strokeRect(x, y, h, w)
}

let nextXCoord: number = 0;
let nextYCoord: number = 0;
let nextHeight: number = 10;
let nextWidth: number = 10;

for (let i = 0; i < 6; i++) {
    drawRect(nextXCoord, nextYCoord, nextHeight, nextWidth)
    nextXCoord += nextHeight
    nextYCoord += nextWidth
    nextHeight += 10
    nextWidth += 10
}
