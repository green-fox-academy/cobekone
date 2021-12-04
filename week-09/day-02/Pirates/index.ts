import { parentPort } from "worker_threads";

class Pirate {
    intoxication: number = 0;
    dead: boolean = false;
    parrot: string = 'parrot';
    constructor() {
        this.intoxication;
        this.dead;
        this.parrot;
    }

    drinkSomeRum(){
        if (this.dead == true) {
            console.log('he\'s dead')
        }
        this.intoxication++
    }

    howsItGoingMate(){
        if (this.dead == true) {
            console.log('he\'s dead')
        }
        if (this.intoxication < 4) {
            console.log('Pour me anudder!')
        }
        console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?')
        this.intoxication = 0;
    }

    brawl(pirate: Pirate){
        if (this.dead == true) {
            console.log('he\'s dead')
        }
        
        if (this.dead == false && pirate.dead == false) {
            let whoDies = Math.floor(Math.random()*3);
            if (whoDies == 0) {
                this.dead = true;
            }else if (whoDies == 1) {
                pirate.dead = true;
            }else if (whoDies == 2) {
                this.dead = true;
                pirate.dead = true;
            }
            }
    }

    die(){
        this.dead = true;
    }
}

let pirate1 = new Pirate;
/* console.log(pirate1) */

class Ship {
    listOfPirates: Pirate[];
    captain: Pirate[];
    constructor() {
        this.listOfPirates = [];
        this.captain = [];
    }

    fillShip(){
        this.captain = [new Pirate]
        let numberOfCrew = Math.floor(Math.random() * 113);
        for (let i = 0; i < numberOfCrew; i++){
            this.listOfPirates.push(new Pirate)
        }
    }

    infoAboutShip(){
        console.log(`rum consumed by the captain: ${this.captain[0].intoxication}`);
        let numberOfAliveCrewMembers: number = 0;
        for (let i = 0; i < this.listOfPirates.length; i++) {
            if (this.listOfPirates[i].dead === false) {
                numberOfAliveCrewMembers++;
            }
        }
        console.log(`number of alive pirates in the crew: ${numberOfAliveCrewMembers}`);
    }
}

let ship1 = new Ship;
ship1.fillShip();
console.log(ship1)
ship1.infoAboutShip();