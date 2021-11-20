'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//Egyenlő oldalú háromszög rajzoló: a = oldal hossza; b = bal alsó sarok koordinátái

function drawTriangle(a: number, bx: number, by: number) {
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(bx + a, by);
    ctx.lineTo(bx + a/2, by - ((Math.sqrt(3)) / 2) * a);
    ctx.closePath()
    ctx.stroke();
}

let oldalHossz: number = 10;
let lineCount: number = 40;


for (let i: number = 0; i < lineCount + 1; i++) {

    for (let j = 0; j < i; j++) {
        
        drawTriangle (oldalHossz, j* oldalHossz + ((lineCount - i)* oldalHossz / 2) , (i * (Math.sqrt(3)) / 2) * oldalHossz)
    }
}


