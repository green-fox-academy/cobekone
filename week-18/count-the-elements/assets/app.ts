const button = document.querySelector("button");

function howManyElements() {
  let result = document.querySelector(".result");

  (result as HTMLElement).innerHTML = `${
    document.querySelectorAll("li").length
  }`;
}

button?.addEventListener("click", howManyElements);
