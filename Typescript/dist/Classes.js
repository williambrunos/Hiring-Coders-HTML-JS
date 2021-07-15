"use strict";
class Animal {
    constructor(name, race, numOfPaws) {
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
let animals = [];
let animal = new Animal("Hover", "Bulldog", 4);
animals.push(animal);
animal = new Animal("Grover", "Pinscher", "3");
animals.push(animal);
animals.map(animal => console.log(animal));
