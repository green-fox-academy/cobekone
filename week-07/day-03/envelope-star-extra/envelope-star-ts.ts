'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function drawLine(x1: number, y1:number, x2: number, y2:number, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
}

let h: number = 100; //ág hossza
let x: number = 10; //ág osztása
let t: number = 20; //ágak száma

function star {
  for (var i = 0; i < t; i++) {
  drawLine(
    canvas.width/2,
    canvas.height/2,
    canvas.width/2 + Math.sin((2*Math.PI/t)*i)*h,
    canvas.height/2 + Math.cos((2*Math.PI/t)*i)*h
    )
}}

star()

/*
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
*/



