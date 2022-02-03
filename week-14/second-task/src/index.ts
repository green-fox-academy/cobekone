const apple = document.querySelector(".apple");
const balloon = document.querySelector(".balloon");
const cat = document.querySelector(".cat");
const animals = document.querySelector(".animals");

balloon.innerHTML += " " + apple.innerHTML;
cat.innerHTML += " " + balloon.innerHTML;
animals.innerHTML += " " + cat.innerHTML;
