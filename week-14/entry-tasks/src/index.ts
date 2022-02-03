const asteroid = document.querySelector(".asteroid");

console.log(asteroid.innerHTML);
console.log(asteroid.textContent);
asteroid.innerHTML = "This is your <strong>new content!</strong>";

let king = document.querySelector("#b325");
console.log(king);

let businessLamp = document.querySelectorAll(".big");
console.log(businessLamp[0]);
console.log(businessLamp[1]);

let conceitedKing = document.querySelectorAll("#b325, .b326");
console.log(conceitedKing);

let noBusiness = document.querySelectorAll("#b325, .b326, .b329");
for (let i = 0; i < noBusiness.length; i++) {
  console.log(noBusiness[i]);
}
