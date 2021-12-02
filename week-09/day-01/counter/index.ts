export class Counter {
    private initial: number;
    counter: number;
    constructor(counter: number = 0) {
    this.counter = counter;
    this.initial = counter;
    }

    add(x: number = 1){
        this.counter += x;
    }

    get(){
        return this.counter;
    }

    reset(){
        this.counter = this.initial; 
    }
}

let number = new Counter(20);
number.add(100)
console.log(number)
number.reset()
console.log(number)

