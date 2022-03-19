let button = document.querySelector("button");
let clickCounter = 0;
let timeElapsed = false;
let script = document.querySelector(".lastscript") as HTMLElement;

function startTimer(): void {
  console.log("starttimer started");
  setTimeout(() => {
    timeElapsed = true;
    textChanger();
  }, 5000);
}
function textChanger(): void {
  if (clickCounter >= 3 && timeElapsed) {
    (document.querySelector("div") as HTMLElement).innerHTML =
      "5 seconds elapsed and clicked 3 times";
  }
}

function clickAdder(): void {
  clickCounter++;
  console.log(clickCounter);
  textChanger();
}

window.addEventListener("load", startTimer);
button?.addEventListener("click", clickAdder);

//Sajnos ts-ben ez nem működik, valamiért az onload nem triggerelődik (gondolom a fordító scripttel akad valami össze és a betöltés után jut csak ide a kód...). De a js működik!!!
