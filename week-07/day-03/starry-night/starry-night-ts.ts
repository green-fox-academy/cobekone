'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)

for (let i = 0; i < 500; i++) {
/*     ctx.fillStyle = 'rgba( 255, 255, 255,' +
    + Math.random() * 255 + ')' */
    ctx.fillStyle = 'rgba( 255, 255, 255,' +
    + Math.random() + ')'
    ctx.fillRect(Math.random() * canvas.width, Math.random () * canvas.height, 3, 3) 
}