class Animal {
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
}

let kutya = new Animal;
console.log(kutya)
kutya.drink();
kutya.drink();
kutya.eat();
kutya.eat();
kutya.eat();
kutya.play();
console.log(kutya)