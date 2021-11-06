let listA: any = {Fruits: ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"]
}
let listB: any = {Fruits: ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"]}


console.log (listA.Fruits.indexOf("Durian") > -1);

listB.Fruits.splice([listB.Fruits.indexOf("Durian")], 1);

listA.Fruits.splice (3,0,"Kiwifruit");

if (listA.Fruits.length > listB.Fruits.length) {
    console.log("listA a hosszabb")
} else if (listA.Fruits.length = listB.Fruits.length){
    console.log("a két lista egyenlő")
} else {
    console.log("listB a hosszabb")
}

console.log (listA.Fruits.indexOf("Avocado"));
console.log (listB.Fruits.indexOf("Durian"));

listB.Fruits =  [...listB.Fruits, "Passion Fruit", "Pomelo"]

console.log (listA.Fruits[2])