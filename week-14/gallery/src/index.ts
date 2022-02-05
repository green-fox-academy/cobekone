import { imageData } from "./image-data";

for (let i = 0; i < imageData.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.className = "small-images";
  newDiv.id = `${i}`;
  newDiv.style.backgroundImage = `url("${imageData[i].url}")`;
  document.querySelector(".small-image-container").appendChild(newDiv);
}

let currentlySelected: number = 0;

function applyCurrentlySelected() {
  (
    document.querySelector(".current-image") as HTMLElement
  ).style.backgroundImage = `url("${imageData[currentlySelected].url}")`;
}

applyCurrentlySelected();

function imageClicked(event: any) {
  currentlySelected = event.target.id;
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
