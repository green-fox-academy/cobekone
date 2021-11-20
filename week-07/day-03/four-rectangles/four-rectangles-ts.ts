'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

function drawRect(x: number, y: number, h: number, w: number, color: string) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, h, w)
}

drawRect (100, 100, 20, 20, 'red')
drawRect (200, 200, 50, 20, 'green')
drawRect (300, 300, 20, 50, 'yellow')
drawRect (400, 300, 50, 50, 'cyan')