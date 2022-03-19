let createButton = document.querySelector(".create") as HTMLButtonElement;
let buyButton = document.querySelector(".buy") as HTMLButtonElement;
let rainButton = document.querySelector(".rain") as HTMLButtonElement;
let candyRate = document.querySelector(".candyrate") as HTMLElement;
let candyCount = document.querySelector(".candycount") as HTMLElement;
let lollypopCount = document.querySelector(".lollypopcount") as HTMLElement;

let candyRateData = 0;
let candyCountData = 0;
let lollypopCountData = "";

function autoUpdateTextFields(): void {
  setInterval(() => {
    candyRate.innerHTML = `${candyRateData}`;
    candyCount.innerHTML = `${candyCountData}`;
    lollypopCount.innerHTML = lollypopCountData;
  }, 200);
}

autoUpdateTextFields();
let speedUp = 1;

let newInterval = setInterval(generateCandies, 1000 / speedUp);

function generateCandies(): void {
  candyRateData = Math.floor(lollypopCountData.length / 20);
  candyCountData += candyRateData;
}

function addCandy(): void {
  candyCountData++;
}

function buyLollipop(): void {
  if (candyCountData >= 10) {
    candyCountData -= 10;
    lollypopCountData += "🍭";
  }
}

function makeItFaster(): void {
  clearInterval(newInterval);
  speedUp = speedUp * 10;
  newInterval = setInterval(generateCandies, 1000 / speedUp);
}

createButton?.addEventListener("click", addCandy);
buyButton?.addEventListener("click", buyLollipop);
rainButton?.addEventListener("click", makeItFaster);
