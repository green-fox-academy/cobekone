export class Animal {
    private hunger: number;
    private thirst: number;

    constructor(hunger: number = 50, thirst: number = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    eat(){
        this.hunger --
    }
    drink(){
        this.thirst --
    }
    play(){
        this.hunger ++;
        this.thirst ++;
    }
    getHunger(){
        return this.hunger
    }
    getThirst(){
        return this.thirst
    }
}

export class Farm {
    listOfAnimals: any[] = [];
    limit: number;
    constructor(limit: number) {
        this.limit = limit;
        this.listOfAnimals;
    }

    breed(){
        if (this.listOfAnimals.length === this.limit) {
            return
        }else{
            this.listOfAnimals.push(new Animal())
        }
    }

    sell(){
        let leastHungryIndex: number = 0;
        let leastHungryValue: number = this.listOfAnimals[leastHungryIndex].hunger;
        for (let i = 0; i < this.listOfAnimals.length; i++) {
            if (leastHungryValue > this.listOfAnimals[i].hunger) {
                leastHungryIndex = i;
                leastHungryValue = this.listOfAnimals[i].hunger;
            }
        }
        this.listOfAnimals.splice(leastHungryIndex,1)
    }

    getListOfAnimals(){
        return this.listOfAnimals;
    }

    getLimit(){
        return this.limit;
    }
}

let farm1 = new Farm(10);
farm1.breed();
farm1.breed();
farm1.breed();
farm1.breed();
farm1.breed();
farm1.breed();
farm1.breed();
farm1.listOfAnimals[6].eat();
farm1.listOfAnimals[6].eat();
farm1.listOfAnimals[5].eat();
console.log(farm1)
farm1.sell();
console.log(farm1)