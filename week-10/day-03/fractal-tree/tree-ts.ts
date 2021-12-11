'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//vonalrajzoló function
function drawLine(x1: number, y1:number, x2: number, y2:number, color: string) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function degToRad(degreeInput:number) {
    return (degreeInput * Math.PI) / 180
}

ctx.fillStyle = '#264653';
ctx.fillRect(0, 0, canvas.width, canvas.height)

function drawTree(degree:number,length:number, lastX: number, lastY: number){
    drawLine(lastX, lastY, lastX + (Math.cos(degToRad(degree)))*length, lastY +(Math.sin(degToRad(degree)))*length, '#e9c46a')
    drawLine(lastX, lastY, lastX + (Math.cos(degToRad(degree-20)))*length, lastY +(Math.sin(degToRad(degree-20)))*length, '#e9c46a')
    drawLine(lastX, lastY, lastX + (Math.cos(degToRad(degree+20)))*length, lastY +(Math.sin(degToRad(degree+20)))*length, '#e9c46a')

    if (length <= 30) {
        return
    }   

    drawTree(degree-20, length-7, lastX + (Math.cos(degToRad(degree-20)))*length, lastY +(Math.sin(degToRad(degree-20)))*length);
    drawTree(degree, length-7, lastX + (Math.cos(degToRad(degree)))*length, lastY +(Math.sin(degToRad(degree)))*length);
    drawTree(degree+20, length-7, lastX + (Math.cos(degToRad(degree+20)))*length, lastY +(Math.sin(degToRad(degree+20)))*length);
}

drawTree(270, 70, 300, 400)