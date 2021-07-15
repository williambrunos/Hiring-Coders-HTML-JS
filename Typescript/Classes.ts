class Animal {
  // A única diferença é a definição de tipos necessária dos atributos
  // Com TS conseguimos utilizar modificadores de acesso!!!
  private name: string;
  private race: string;
  private numOfPaws: number | string;

  // Os valores a seguir nas variáveis são valores default caso nenhum seja passado
  // como argumento
  constructor(
    name: string = "Jack", 
    race: string = "Vira lata", 
    numOfPaws: number | string = 4
    ) {
    this.name = name;
    this.race = race;
    this.numOfPaws = numOfPaws;
  }

  public getName(): string {
    return this.name;
  }

  public getRace(): string {
    return this.race;
  }

  public getNumOfPaws(): string | number {
    return this.numOfPaws;
  }
}

class Simba extends Animal {
  constructor(
    name: string = "Jack", 
    race: string = "Vira lata", 
    numOfPaws: number | string = 4) {

    super(name, race, numOfPaws);
  }

  public bark() {
    console.log("roof roof");
  }

  public poop() {
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

animals.map( animal => console.log(animal) );