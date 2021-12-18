export abstract class Vehicle {
  color: string;
  type: string;
  brand: string;
  constructor(color: string, type: string, brand: string) {
    this.color = color;
    this.brand = brand;
    this.type = type;
  }
}
