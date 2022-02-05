function partySwitch() {
  (document.querySelector("body") as HTMLElement).classList.toggle("party");
}

document.querySelector("button").addEventListener("click", partySwitch);
