import {
  adder,
  deleter,
  stepDown,
  stepUp,
  toggleSelectedClass,
} from "./button-functions";

let list: string[] = ["bread", "milk", "orange", "tomato"];
let buttonText: string[] = ["Up", ">", "X", "Down"];
export let choosenList: string[] = [];

let newContainerDiv = document.createElement("div");
newContainerDiv.className = "container";

document.querySelector("body").appendChild(newContainerDiv);

for (let i = 0; i < 3; i++) {
  let newDiv = document.createElement("div");
  newDiv.className = "small-div";
  document.querySelector(".container").appendChild(newDiv);
}
function listDrawer() {
  for (let i = 0; i < list.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "list-div";
    newDiv.innerHTML = `${list[i]}`;
    document.querySelectorAll(".small-div")[0].appendChild(newDiv);
  }
}
listDrawer();

for (let i = 0; i < 4; i++) {
  let newButton = document.createElement("button");
  newButton.innerHTML = `${buttonText[i]}`;
  document.querySelectorAll(".small-div")[1].appendChild(newButton);
}

(document.querySelectorAll(".small-div")[1] as HTMLElement).style.border =
  "none";

let buttonHtmlElements = document.querySelectorAll("button");
export let listHtmlElements = (
  document.querySelectorAll(".small-div")[0] as HTMLElement
).querySelectorAll(".list-div");

export function updateListHtmlElements() {
  listHtmlElements = (
    document.querySelectorAll(".small-div")[0] as HTMLElement
  ).querySelectorAll(".list-div");
}

buttonHtmlElements[0].addEventListener("click", stepUp);
buttonHtmlElements[1].addEventListener("click", adder);
buttonHtmlElements[2].addEventListener("click", deleter);
buttonHtmlElements[3].addEventListener("click", stepDown);

toggleSelectedClass();
