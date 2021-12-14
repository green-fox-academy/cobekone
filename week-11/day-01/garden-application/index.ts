class Garden {
  plantsInTheGarden: any[];
  constructor() {
    this.plantsInTheGarden = [];
  }

  addPlant(plant: any) {
    this.plantsInTheGarden.push(plant);
  }

  getPlants() {
    console.log(this.plantsInTheGarden);
  }

  getPlantsNicely() {
    for (let i = 0; i < this.plantsInTheGarden.length; i++) {
      console.log(
        "The " +
          this.plantsInTheGarden[i].color +
          " " +
          this.plantsInTheGarden[i].typeOfPlant +
          " " +
          this.plantsInTheGarden[i].wateringRequired
      );
    }
  }

  waterGarden(amount: number) {
    let numberOfPlantsToWater = 0;
    for (let i = 0; i < this.plantsInTheGarden.length; i++) {
      if (this.plantsInTheGarden[i].wateringRequired === "needs water") {
        numberOfPlantsToWater++;
      }
    }
    for (let i = 0; i < this.plantsInTheGarden.length; i++) {
      if (this.plantsInTheGarden[i].wateringRequired === "needs water") {
        this.plantsInTheGarden[i].watering(amount / numberOfPlantsToWater);
      }
    }
    console.log("----------------------");
    console.log("Watering with " + amount);
    this.getPlantsNicely();
  }
}

class Flower {
  typeOfPlant: string;
  color: string;
  wateringStatus: number;
  wateringRequired: string;
  constructor(color: string) {
    this.color = color;
    this.wateringStatus = 0;
    this.wateringRequired = "needs water";
    this.typeOfPlant = "Flower";
  }
  watering(amount: number) {
    this.wateringStatus += amount * 0.75;
    if (this.wateringStatus < 5) {
      this.wateringRequired = "needs water";
    } else this.wateringRequired = "doesn't need water";
  }
}

class Tree {
  typeOfPlant: string;
  color: string;
  wateringStatus: number;
  wateringRequired: string;
  constructor(color: string) {
    this.color = color;
    this.wateringStatus = 0;
    this.wateringRequired = "needs water";
    this.typeOfPlant = "Tree";
  }
  watering(amount: number) {
    this.wateringStatus += amount * 0.4;
    if (this.wateringStatus < 10) {
      this.wateringRequired = "needs water";
    } else this.wateringRequired = "doesn't need water";
  }
}

let theGarden = new Garden();
let tree1 = new Tree("purple");
let tree2 = new Tree("orange");
let flower1 = new Flower("yellow");
let flower2 = new Flower("blue");

theGarden.addPlant(flower1);
theGarden.addPlant(flower2);
theGarden.addPlant(tree1);
theGarden.addPlant(tree2);

theGarden.waterGarden(30);
theGarden.waterGarden(100);

/* theGarden.getPlants();
theGarden.getPlantsNicely(); */
