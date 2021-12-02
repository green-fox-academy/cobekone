'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};


// DO NOT TOUCH THE CODE ABOVE THIS LINE

let h: number = 200; //ág hossza
let x: number = 10; //ág osztása
let t: number = 4; //ágak száma
let coords: number[] = []; //koordináta tároló


var scale = <HTMLInputElement>document.getElementById("scaleID");
scale.oninput = function() {
    h = parseInt (scale.value);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    coords.length = 0;
    varLength = t * x;
    star();
    starCoord();
  }

  var starCorners = <HTMLInputElement>document.getElementById("starcornerID");
starCorners.oninput = function() {
    t = parseInt (starCorners.value);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
/*     console.log ('Starcorner csuszkaval beallitva: ' + x) */
    coords.length = 0;
    varLength = t * x;
    star();
    starCoord();
  }

  var divisions = <HTMLInputElement>document.getElementById("divisionsID");
  divisions.oninput = function() {
      x = parseInt (divisions.value);
      ctx.clearRect(0, 0, canvas.width, canvas.height)
/*       console.log ('Starcorner csuszkaval beallitva: ' + x) */
      coords.length = 0;
      varLength = t * x;
      star();
      starCoord();
    }



//ideiglenes koordináta jelölő function
function markCoord(x: number, y: number) {
  ctx.beginPath();
  ctx.arc(x, y, 2, 0, Math.PI * 2);
  ctx.stroke();
}

//vonalrajzoló function
function drawLine(x1: number, y1:number, x2: number, y2:number, color: string) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
}



function star () {
  for (var i = 0; i < t; i++) {
  drawLine(
    canvas.width/2,
    canvas.height/2,
    canvas.width/2 + Math.sin((2*Math.PI/t)*i)*h,
    canvas.height/2 + Math.cos((2*Math.PI/t)*i)*h,
    'green'
    )
/*     markCoord (canvas.width / 2 + Math.sin((2 * Math.PI / t) * i) * h,
        canvas.height / 2 + Math.cos((2 * Math.PI / t) * i) * h) */ //Ezt itt visszakapcsolva jelöli az alap csillag végpontjait
}}

let varLength: number = t * x;
function starCoord () {

  for (var i = 0; i < t; i++) {
  for (var j = 0; j < x; j++) {
  
/*      markCoord (canvas.width / 2 + Math.sin((2 * Math.PI / t) * i) * h / x * j,
        canvas.height / 2 + Math.cos((2 * Math.PI / t) * i) * h / x * j); */  //Ezt itt visszakapcsolva jelöli a koordinátákat a vonalakon
        
        coords [varLength] = [j, (
        canvas.width / 2 + Math.sin((2 * Math.PI / t) * i) * h / x * j), //x koordináta
        canvas.height / 2 + Math.cos((2 * Math.PI / t) * i) * h / x * j]; //y koordináta
        varLength--
}}

//utolsó szegmens összekötése
for (let i = 1; i <= x ; i++) {
  drawLine (
    coords [i][1], //x1
    coords [i][2], //y1
    coords [x * t - i][1], //x2
    coords [x * t - i][2], //y2
    'green')   
/*     console.log (i) */
}


//összekötő
let dwn = 0;
for (let j = 0; j <= (t-1) * x; j+=x){
  for (let i = 1; i <= x ; i++) {
      if (dwn === x * (t-1)) {
      return;
    }
    dwn++ 
    drawLine (
      coords [i + j][1], //x1
      coords [i + j][2], //y1
      coords [2 * x - i + j][1], //x2
      coords [2 * x - i + j][2], //y2
      'green')  
/*       dwn++
      console.log ('drawline numbers:' + dwn)  */
  }
}
}

 star();
starCoord();

/* 
coords [varLength+coords[current][0]/t - azaz hanyadik vonal koordinátáit nézzük épp] = [hanyadik koordináta a vonalon, x, y]; //első vonal első x
*/