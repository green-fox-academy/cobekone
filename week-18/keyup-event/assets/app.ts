let lastPressedText = document.querySelector("h1");

window.addEventListener("keyup", (event) => {
  console.log(event);
  (lastPressedText as HTMLElement).innerHTML =
    "Last pressed key code is: " + event.code;
});
