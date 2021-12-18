import { Flyable } from "./Flyable";
import { Vehicle } from "./Vehicle";

class Helicopter extends Vehicle implements Flyable {
  land() {}
  fly() {}
  takeOff() {}
}

let helicopter1 = new Helicopter("blue", "Apache", "Military branded");
console.log(helicopter1);
