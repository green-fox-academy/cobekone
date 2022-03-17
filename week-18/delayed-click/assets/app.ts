let button = document.querySelector("button");

function showText() {
  setTimeout(() => {
    (document.querySelector("div") as HTMLElement).innerHTML =
      "2 seconds ellapsed";
  }, 2000);
}

button?.addEventListener("click", showText);
