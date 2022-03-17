/* let windowObject = document.querySelector("window"); */

/* console.log(windowObject);
 */
/* function howManyElements() {
  let result = document.querySelector(".result");

  (result as HTMLElement).innerHTML = `${
    document.querySelectorAll("li").length
  }`;
} */

let lastPressedText = document.querySelector("h1");

window.addEventListener("keyup", (event) => {
  console.log(event);
  (lastPressedText as HTMLElement).innerHTML =
    "Last pressed key code is: " + event.code;
});
