document.querySelector("li").remove();

const planetData = [
  {
    category: "inhabited",
    content: "Foxes",
    asteroid: true,
  },
  {
    category: "inhabited",
    content: "Whales and Rabbits",
    asteroid: true,
  },
  {
    category: "uninhabited",
    content: "Baobabs and Roses",
    asteroid: true,
  },
  {
    category: "inhabited",
    content: "Giant monsters",
    asteroid: false,
  },
  {
    category: "inhabited",
    content: "Sheep",
    asteroid: true,
  },
];

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid) {
    let newChild = document.createElement("li");
    newChild.className = planetData[i].category;
    newChild.innerHTML = planetData[i].content;
    document.querySelector("ul").appendChild(newChild);
  }
}
