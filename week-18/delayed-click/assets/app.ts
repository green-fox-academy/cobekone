let buttonOnce = document.querySelector("button");

function onceClick() {
  console.log(Date());
  window.removeEventListener("click", onceClick);
  //vagy így, de ezt amúgyis illik itthagyni, hogy ne is próbáljon ráklikkelni:
  (buttonOnce as HTMLButtonElement).disabled = true;
}

window.addEventListener("click", onceClick);
