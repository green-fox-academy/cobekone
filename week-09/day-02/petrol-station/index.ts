class Station {
    gasAmount: number;
    constructor() {
        this.gasAmount = 1000;
    }
    refill(car: Car){
    station1.gasAmount -= (car.capacity - car.gasAmount)
    car.gasAmount = car.capacity
    };
}

class Car {
    gasAmount: number;
    capacity: number;
    constructor() {
        this.gasAmount = 0;
        this.capacity = 100;    
    }
}

let station1 = new Station;
let car1 = new Car;
station1.refill(car1);
console.log(station1.gasAmount)
console.log(car1.gasAmount)