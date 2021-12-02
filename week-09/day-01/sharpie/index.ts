export class Sharpie {
    color: string;
    width: number;
    private inkAmount;
    constructor(color: string, width: number) {
        this.inkAmount = 100;
        this.width = width;
        this.color = color;
    }

    use(){
        this.inkAmount -= 10;
    }
    getInkAmount(){
        return this.inkAmount
    }
}

let sharpie1 = new Sharpie('red', 7)
console.log(sharpie1)
sharpie1.use();
console.log(sharpie1)
console.log(sharpie1.getInkAmount())