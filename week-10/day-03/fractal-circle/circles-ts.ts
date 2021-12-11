'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawCircle(radius:number, coordX: number, coordY: number) {
    ctx.beginPath();
    ctx.arc(coordX, coordY, radius, 0, Math.PI * 2);
    ctx.stroke();
  }


function drawTriangle(sidelength: number, coordX: number, coordY: number) {
    ctx.beginPath();
    ctx.moveTo(coordX, coordY);
    ctx.lineTo(coordX + sidelength, coordY);
    ctx.lineTo(coordX + sidelength/2, coordY - ((Math.sqrt(3)) / 2) * sidelength);
    ctx.closePath()
    ctx.stroke();
}

function draw3Circles(sideLength:number, coordX:number, coordY:number) {
    drawCircle(5, coordX, coordY)
    drawCircle(sideLength/2, coordX + Math.cos((7 * Math.PI / 6))*sideLength/2, coordY - Math.sin((7 * Math.PI / 6))*sideLength/2);
    drawCircle(sideLength/2, coordX + (Math.sqrt(3)) / 2*sideLength/2, coordY + 1/2 * sideLength/2);
    drawCircle(sideLength/2, coordX, coordY - sideLength/2)

    if (sideLength <= 30){
        return drawTriangle(2,coordX, coordY)
    }
    draw3Circles(sideLength/2, coordX + Math.cos((7 * Math.PI / 6))*sideLength/2, coordY - Math.sin((7 * Math.PI / 6))*sideLength/2)
    draw3Circles(sideLength/2, coordX + Math.cos((11 * Math.PI / 6))*sideLength/2, coordY - Math.sin((11 * Math.PI / 6))*sideLength/2)
    draw3Circles(sideLength/2, coordX, coordY - sideLength/2)
}

draw3Circles(200, 200, 200)

//itt máshogyan kellett volna ahhoz, hogy legyen egy nagy kör is az elején... legközelebb már úgy fogom, most már eltöltöttem vele
//~2 órát, úgyhogy inkább haladok
