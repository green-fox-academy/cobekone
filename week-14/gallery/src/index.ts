import { imageData } from "./image-data";

for (let i = 0; i < imageData.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.className = "small-images";
  newDiv.id = "id" + `${i}`;
  newDiv.style.backgroundImage = `url("${imageData[i].url}")`;
  document.querySelector(".small-image-container").appendChild(newDiv);
}

let currentlySelected: number = 0;
let currentlySelectedId: any = 0;
let currentlyHovered: number = 0;
let currentlyHoveredId: any = 0;

function applyCurrentlySelected() {
  (
    document.querySelector(".current-image") as HTMLElement
  ).style.backgroundImage = `url("${imageData[currentlySelected].url}")`;

  document.querySelector(
    ".title-of-image"
  ).innerHTML = `${imageData[currentlySelected].title}`;
  document.querySelector(
    ".description-of-image"
  ).innerHTML = `${imageData[currentlySelected].description}`;
}

applyCurrentlySelected();

function imageClicked(event: any) {
  currentlySelected = event.target.id.split("id").join("");
  currentlySelectedId = "id" + currentlySelected;
  console.log(currentlySelected);
  if (currentlySelected) {
    applyCurrentlySelected();
  }
}

document
  .querySelector(".small-image-container")
  .addEventListener("click", imageClicked);

document.querySelector("#go-right").addEventListener("click", goRight);
document.querySelector("#go-left").addEventListener("click", goLeft);

function goRight() {
  if (currentlySelected == imageData.length - 1) {
    return;
  }
  currentlySelected++;
  applyCurrentlySelected();
}
function goLeft() {
  if (currentlySelected == 0) {
    return;
  }
  currentlySelected--;
  applyCurrentlySelected();
}

for (let i = 0; i < imageData.length; i++) {
  document
    .querySelector(`#id${i}`)
    .addEventListener("mouseenter", imageHovered);
}

function imageHovered(event: any) {
  currentlyHoveredId = event.target.id;
  currentlyHovered = event.target.id.split("id").join("");
  console.log(currentlyHoveredId);
  if (currentlyHoveredId) {
    let leftCoord = (
      document.querySelector(`#${currentlyHoveredId}`) as HTMLElement
    ).offsetLeft;
    console.log(leftCoord);

    (
      document.querySelector(".hovering-title-block") as HTMLElement
    ).style.marginLeft = `${leftCoord}px`;

    console.log("hoverelve van: " + currentlyHovered);
    (
      document.querySelector(".hovering-title-block") as HTMLElement
    ).style.visibility = "visible";
  }
}
