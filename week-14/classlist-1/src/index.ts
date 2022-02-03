let paragraphs = document.querySelectorAll("p");

if (paragraphs[3].innerHTML == "dolphin") {
  document.querySelector(".apple").innerHTML = "pear";
}

if (paragraphs[0].className == "apple") {
  document.querySelector(".cat").innerHTML = "dog";
}

document.querySelector(".apple").classList.add("red");

(document.querySelector(".balloon") as HTMLElement).style.borderRadius = "0%";
