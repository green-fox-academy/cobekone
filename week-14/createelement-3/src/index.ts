const kids = [
  { petName: "Wattled crane", owner: "Bryant" },
  { petName: "Devil, tasmanian", owner: "Alejandro" },
  { petName: "Mynah, common", owner: "Nelie" },
  { petName: "Dolphin, common", owner: "Mariele" },
  { petName: "Gray duiker", owner: "Maddalena" },
  { petName: "Crab (unidentified)", owner: "Lucine" },
  { petName: "Ant (unidentified)", owner: "Lorianna" },
  { petName: "Bison, american", owner: "Tommie" },
  { petName: "Yellow mongoose", owner: "Vivyan" },
  { petName: "Carpet snake", owner: "Veda" },
  { petName: "Lesser mouse lemur", owner: "Isidor" },
];

for (let i = 0; i < kids.length; i++) {
  let article = document.createElement("article");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");

  h3.innerHTML = kids[i].owner;
  p.innerHTML = kids[i].petName;
  article.appendChild(h3);
  article.appendChild(p);
  document.querySelector("main").appendChild(article);
}
