let buttonUp = document.querySelector('[data-direction="up"]') as HTMLElement;
let buttonDown = document.querySelector(
  '[data-direction="down"]'
) as HTMLElement;
let buttonLeft = document.querySelector(
  '[data-direction="left"]'
) as HTMLElement;
let buttonRight = document.querySelector(
  '[data-direction="right"]'
) as HTMLElement;
let buttonIn = document.querySelector('[data-direction="in"]') as HTMLElement;
let buttonOut = document.querySelector('[data-direction="out"]') as HTMLElement;
let image = document.querySelector(".img-inspector") as HTMLElement;

function regenImage() {
  image.style.backgroundSize = `${currentZoomPercentage}%`;
  image.style.backgroundPosition = `${currentXPosition}px ${currentYPosition}px`;
}

let currentZoomPercentage = 200;

function zoomIn() {
  currentZoomPercentage += 20;
  regenImage();
}
function zoomOut() {
  currentZoomPercentage -= 20;
  regenImage();
}

buttonIn.addEventListener("click", zoomIn);
buttonOut.addEventListener("click", zoomOut);

let currentXPosition = 0;
let currentYPosition = 0;

function moveLeft() {
  currentXPosition += 20;
  regenImage();
}
function moveRight() {
  currentXPosition -= 20;
  regenImage();
}
function moveUp() {
  currentYPosition += 20;
  regenImage();
}
function moveDown() {
  currentYPosition -= 20;
  regenImage();
}

buttonLeft.addEventListener("click", moveLeft);
buttonRight.addEventListener("click", moveRight);
buttonDown.addEventListener("click", moveDown);
buttonUp.addEventListener("click", moveUp);
