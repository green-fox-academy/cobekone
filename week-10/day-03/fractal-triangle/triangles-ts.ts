'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//Egyenlő oldalú háromszög rajzoló: a = oldal hossza; b = bal alsó sarok koordinátái

function drawTriangle(sidelength: number, coordX: number, coordY: number) {
    ctx.beginPath();
    ctx.moveTo(coordX, coordY);
    ctx.lineTo(coordX + sidelength, coordY);
    ctx.lineTo(coordX + sidelength/2, coordY - ((Math.sqrt(3)) / 2) * sidelength);
    ctx.closePath()
    ctx.stroke();
}

function draw3Triangles(sideLength:number, coordX:number, coordY:number) {
    drawTriangle(sideLength/2, coordX, coordY);
    drawTriangle(sideLength/2, coordX + (sideLength/2), coordY);
    drawTriangle(sideLength/2, coordX + (sideLength/4), coordY - ((Math.sqrt(3)) / 2) * sideLength/2)

    if (sideLength <= 20){
        return drawTriangle(2,coordX, coordY)
    }
    draw3Triangles(sideLength/2, coordX, coordY)
    draw3Triangles(sideLength/2, coordX + (sideLength/2), coordY)
    draw3Triangles(sideLength/2, coordX + (sideLength/4), coordY - ((Math.sqrt(3)) / 2) * sideLength/2)
}

draw3Triangles(400, 50, 380)


