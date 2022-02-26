for (let i = 1; i <= 100; i++) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `${i}`;
  document.querySelector("section")?.appendChild(newDiv);
}

let numberDivs = document.querySelectorAll("div");

function primeNumberClass(htmlElement: HTMLElement) {
  let isPrime: boolean = true;
  let htmlValue = parseInt(htmlElement.innerHTML);

  if (htmlValue == 0 || htmlValue == 1) {
    isPrime = true;
  }

  for (let i = 2; i <= htmlValue / 2; i++) {
    if (htmlValue % i == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    htmlElement.className = "prime";
  } else htmlElement.className = "not-prime";
}

console.log(numberDivs.length);

let i: number = 0;
let myInterval = setInterval(() => {
  if (i < numberDivs.length) {
    primeNumberClass(numberDivs[i]);
    i++;
  } else {
    console.log("leallt");
    clearInterval(myInterval);
  }
}, 10);
