import { Animal } from "./Animal";

export class Mammal extends Animal {
  isMammal: boolean = true;
  breed(): string {
    return "pushing miniature versions out";
  }
}

export class Reptile extends Animal {
  isReptile: boolean = true;
  breed(): string {
    return "laying eggs";
  }
}

export class Bird extends Animal {
  isReptile: boolean = true;
  breed(): string {
    return "laying eggs";
  }
}
