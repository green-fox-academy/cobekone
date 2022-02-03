console.log(document.querySelector("img").src);
document
  .querySelector("img")
  .setAttribute(
    "src",
    "https://i.pinimg.com/170x/91/4e/81/914e81afa68b57c3057ec3dac96c58dd.jpg"
  );

document
  .querySelector("a")
  .setAttribute("href", "https://www.greenfoxacademy.com/");

document.querySelector(".this-one")?.remove();
document.querySelector("button").innerHTML = "Don't click me";
