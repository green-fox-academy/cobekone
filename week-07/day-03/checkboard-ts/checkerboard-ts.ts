
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

function drawRect(x: number, y: number, fillstyle: string) {
    ctx.fillStyle = fillstyle
    ctx.fillRect(x, y, canvas.width / 20, canvas.width / 20)
}

/* drawRect (100, 100, 'black') */

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {

        if ((i + j) %2 === 0) {
            drawRect(j * canvas.width / 20, i * canvas.width / 20, 'black')
            }else{
                drawRect(j * canvas.width / 20, i * canvas.width / 20, 'white')
            }
}}