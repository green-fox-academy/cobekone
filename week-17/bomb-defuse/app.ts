(document.querySelector(".display") as HTMLElement).innerHTML = "10";

(document.querySelector("button") as HTMLElement).addEventListener(
  "click",
  () => {
    (document.querySelector(".display") as HTMLElement).innerHTML =
      "bomb defused";

    clearTimeout(counting2);
  }
);

let i: number = 10;
let counting2 = setInterval(() => {
  if (i <= 0) {
    (document.querySelector(".display") as HTMLElement).innerHTML =
      "Bomb exploded";
    clearInterval(counting2);
  }

  if (
    (document.querySelector(".display") as HTMLElement).innerHTML ==
    "bomb defused"
  ) {
    clearInterval(counting2);
  } else if (i > 0) {
    (document.querySelector(".display") as HTMLElement).innerHTML = `${i}`;
    i--;
  }
}, 1000);
