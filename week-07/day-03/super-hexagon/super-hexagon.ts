'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let kisHexagonOldalhossz: number = 10;
let nagyHexagonOldalszam: number = 2;

var scale = document.getElementById("scaleID");
scale.oninput = function() {
    kisHexagonOldalhossz = parseInt (scale.value);
    console.log ('Scale csuszkaval beallitva: ' + kisHexagonOldalhossz)
    drawIt()
  }

  var sideCount = document.getElementById("sideCountID");
sideCount.oninput = function() {
    nagyHexagonOldalszam = parseInt (sideCount.value);
    console.log ('Sidecount csuszkaval beallitva: ' + kisHexagonOldalhossz)
    drawIt()
  }


//Egyenlő oldalú hatszög rajzoló function: t = oldal hossza; o = középpont koordinátái
function drawHexagon(t: number, ox: number, oy: number) {
    ctx.beginPath();
    //középpont ideiglenes jelölése:
    //ctx.arc(ox, oy, 1, 0, Math.PI * 2)

    ctx.moveTo(ox, oy);
    //felső vonal
    ctx.moveTo(ox - t/2, oy - (Math.sqrt(3) / 2) * t);
    ctx.lineTo(ox + t/2, oy - (Math.sqrt(3) / 2) * t);
    //jobb oldali pontjába
    ctx.lineTo(ox + t, oy);
    //jobb alsó pontjába
    ctx.lineTo(ox + t/2, oy + (Math.sqrt(3) / 2) * t);
    //bal alsó pontjába
    ctx.lineTo(ox - t/2, oy + (Math.sqrt(3) / 2) * t);
    //bal oldali pontjába
    ctx.lineTo(ox - t, oy);

    ctx.closePath()
    ctx.stroke();
}




function drawIt() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let r: number = (Math.sqrt(3) / 2) * kisHexagonOldalhossz
    let nagyHexagonMagassaga: number = 2 * nagyHexagonOldalszam - 1
    let utolsoXKoordinata: number = 0;

//Növekvő rész:

for (let i = 0; i < nagyHexagonOldalszam; i++) {
    for (let j = 0; j < nagyHexagonOldalszam + i; j++) {
        
            drawHexagon (kisHexagonOldalhossz, 

            kisHexagonOldalhossz * 1.5 * i + kisHexagonOldalhossz, 

            (Math.sqrt(3) * kisHexagonOldalhossz * j) + nagyHexagonOldalszam * r - r * i);

            utolsoXKoordinata = kisHexagonOldalhossz + (kisHexagonOldalhossz * 1.5 * i)
    }
}

//Csökkenő rész:

for (let i = 1; i < nagyHexagonOldalszam; i++) {
    for (let j = 0; j < nagyHexagonMagassaga - i; j++) {
        
        drawHexagon (kisHexagonOldalhossz, 

            kisHexagonOldalhossz * i * 1.5 +  utolsoXKoordinata,

            (r * j * 2) + i * r + r)
    }
}
}


drawIt()
