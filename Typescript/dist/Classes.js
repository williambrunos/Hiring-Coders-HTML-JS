"use strict";
class Animal {
    // Os valores a seguir nas variáveis são valores default caso nenhum seja passado
    // como argumento
    constructor(name = "Jack", race = "Vira lata", numOfPaws = 4) {
        this.name = name;
        this.race = race;
        this.numOfPaws = numOfPaws;
    }
    getName() {
        return this.name;
    }
    getRace() {
        return this.race;
    }
    getNumOfPaws() {
        return this.numOfPaws;
    }
}
class Simba extends Animal {
    constructor(name = "Jack", race = "Vira lata", numOfPaws = 4) {
        super(name, race, numOfPaws);
    }
    bark() {
        console.log("roof roof");
    }
    poop() {
        console.log("shhh...do not disturb!");
    }
}
let animals = [];
let animal = new Animal("Hover", "Bulldog", 4);
animals.push(animal);
animal = new Animal("Grover", "Pinscher", "3");
animals.push(animal);
let simba = new Simba("Simba", "Pinscher", "4");
console.log(simba.getName());
animals.push(simba);
simba.poop();
simba.bark();
animals.map(animal => console.log(animal));
