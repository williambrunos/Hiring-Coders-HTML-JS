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

  getName(): string {
    return this.name;
  }

  getRace(): string {
    return this.race;
  }

  getNumOfPaws(): string | number {
    return this.numOfPaws;
  }
}

let animals = [];
let animal = new Animal("Hover", "Bulldog", 4);
animals.push(animal);
animal = new Animal("Grover", "Pinscher", "3");
animals.push(animal);

animals.map( animal => console.log(animal) );