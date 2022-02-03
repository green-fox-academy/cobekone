const li = document.querySelectorAll("li");
let newContent: string[] = ["apple", "banana", "cat", "dog"];

for (let i = 0; i < li.length; i++) {
  li[i].innerHTML = newContent[i];
}

document.querySelector("ul").className = "lime-background";
