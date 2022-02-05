import { ele, mouseDownHandler } from "./drag-element";

function randomPercentage(): number {
  return Math.random() * 100;
}

function randomMilisec() {
  return Math.random() * 5000;
}

let starCoordinates: number[][] = [];
function addStarCoord(x: number, y: number) {
  starCoordinates.push([x, y]);
  console.log(starCoordinates);
}

function randomFallenClass() {
  let currentStars = document.querySelectorAll(".star");
  let randomStarNumber = Math.floor(Math.random() * currentStars.length);
  currentStars[randomStarNumber].classList.add("fallen");
}

function fallingStarsRecursion() {
  setTimeout(() => {
    randomFallenClass();
    if (document.querySelectorAll(".star").length == 0) {
      return;
    }
    fallingStarsRecursion();
  }, randomMilisec());
}

fallingStarsRecursion();

function drawStar(x: number, y: number) {
  let div = document.createElement("div");
  div.className = "star";
  div.style.left = `${x}vw`;
  div.style.top = `${y / 2}vw`;
  document.querySelector(".world").appendChild(div);
}

for (let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  div.className = "star";
  div.style.left = `${randomPercentage()}vw`;
  div.style.top = `${randomPercentage() / 2}vw`;
  document.querySelector(".world").appendChild(div);

  /*   let xPixel = 0
  let yPixel = 0
  let createdelement = element.getBoundingClientRect(); */
}

function starPlacer(event: any) {
  let x = (event.clientX / document.querySelector(".world").clientWidth) * 100;
  let y = (event.clientY / document.querySelector(".world").clientHeight) * 100;

  drawStar(x, y);
}

let tree1 = document.querySelector(".tree.one");
let tree2 = document.querySelector(".tree.two");

document.querySelector(".world").addEventListener("click", starPlacer);
document.querySelector(".tree.one").addEventListener("click", growTree1);
document.querySelector(".tree.two").addEventListener("click", growTree2);

let scale1 = 1;
let scale2 = 1;

function growTree1() {
  scale1++;
  (tree1 as HTMLElement).style.top = `-${scale1 * 25 + 25}px`;
  (
    document.querySelector(".tree.one") as HTMLElement
  ).style.transform = `scale(${scale1},${scale1})`;

  console.log("the tree should grow now");
}
function growTree2() {
  scale2++;
  (tree2 as HTMLElement).style.top = `-${scale2 * 25 + 30}px`;
  (
    document.querySelector(".tree.two") as HTMLElement
  ).style.transform = `scale(${scale2},${scale2})`;

  console.log("the tree should grow now");
}

ele.addEventListener("mousedown", mouseDownHandler);
