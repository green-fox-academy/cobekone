export class Sharpie {
    color: string;
    width: number;
    inkAmount: number;
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
let sharpie2 = new Sharpie('blue', 15)

export class SharpieSet{
    listOfSharpies: any[];
    numberOfUsable: number = 0;
    constructor(){
    this.listOfSharpies = [];
    this.numberOfUsable = 0;
    }
    
    add(sharpie: Sharpie){
    this.listOfSharpies.push(sharpie)    
    }

    countUsable(){
        this.numberOfUsable = 0;
        for (let i = 0; i < this.listOfSharpies.length; i++) {
            if (this.listOfSharpies[i].inkAmount > 0) {
                this.numberOfUsable++;
            }          
        }
        return this.numberOfUsable;
    }

    removeTrash(){
        for (let i = 0; i < this.listOfSharpies.length; i++) {
            if (this.listOfSharpies[i].inkAmount == 0) {
                this.listOfSharpies.splice(i, 1)
            }
            
        }
    }

    getListOfSharpies(){
        return this.listOfSharpies;
    }
}

let sharpieSet1 = new SharpieSet;
sharpieSet1.add(sharpie1);
sharpieSet1.add(sharpie2);
sharpie1.inkAmount = 0;
sharpieSet1.removeTrash();
console.log(sharpieSet1);
console.log(sharpieSet1.countUsable())

