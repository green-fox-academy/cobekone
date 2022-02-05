import { choosenList, listHtmlElements, updateListHtmlElements } from ".";

export let currentlySelected: number = 0;
export function toggleSelectedClass() {
  try {
    listHtmlElements[currentlySelected].classList.toggle("selected");
  } catch (error) {}
}

export function stepUp() {
  if (currentlySelected == 0) {
    return;
  } else {
    toggleSelectedClass();
    currentlySelected--;
    toggleSelectedClass();
  }
}
export function stepDown() {
  if (currentlySelected == listHtmlElements.length - 1) {
    return;
  } else {
    toggleSelectedClass();
    currentlySelected++;
    toggleSelectedClass();
  }
}

export function adder() {
  if (listHtmlElements.length == 0) {
    return;
  }

  let itemToAdd = listHtmlElements[currentlySelected];
  choosenList.push(itemToAdd.innerHTML);

  itemToAdd.className = "list-div";
  itemToAdd.innerHTML = `${listHtmlElements[currentlySelected].innerHTML}`;
  document.querySelectorAll(".small-div")[2].appendChild(itemToAdd);
  updateListHtmlElements();
  currentlySelected = 0;
  toggleSelectedClass();
}
export function deleter() {
  if (listHtmlElements.length == 0) {
    return;
  }
  listHtmlElements[currentlySelected].remove();
  updateListHtmlElements();
  currentlySelected = 0;
  toggleSelectedClass();
}
