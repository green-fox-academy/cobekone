const button = document.querySelector("button");

function writeSomething() {
  console.log("something");
}

button?.addEventListener("click", writeSomething);
