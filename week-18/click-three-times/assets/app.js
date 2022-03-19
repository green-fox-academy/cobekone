let button = document.querySelector("button");
let clickCounter = 0;
let timeElapsed = false;
let script = document.querySelector(".lastscript");


function textChanger(){
    if (clickCounter >= 3 && timeElapsed) {
      document.querySelector("div").innerHTML =
        "5 seconds elapsed and clicked 3 times";
    }
  }

function clickAdder(){
    clickCounter++;
    console.log(clickCounter);
    textChanger();
}

function startTimer() {
  console.log("starttimer started");
  setTimeout(() => {
    timeElapsed = true;
    textChanger();
  }, 5000);
}
window.addEventListener("load", startTimer);
button?.addEventListener("click", clickAdder);