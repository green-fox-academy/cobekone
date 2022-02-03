let ul = document.querySelector(".asteroids");
let li = document.createElement("li");
li.innerHTML = "The Green Fox";
ul.appendChild(li);

let li2 = document.createElement("li");
li2.innerHTML = "The Lamplighter";
ul.appendChild(li2);

let h1 = document.createElement("h1");
h1.innerHTML = "I can add elements to the DOM!";
document.querySelector(".container").appendChild(h1);

let image1 = document.createElement("img");
image1.src =
  "https://lh3.googleusercontent.com/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc=w600";
document.querySelector(".container").appendChild(image1);
