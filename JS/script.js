console.log(myName);
var myName;
myName = "William";

let me = {
  name: "William",
  age: 18,
  sayHello: function() {
    console.log(`Hello, i'm ${this.name} and i'm ${this.age} years old`);
  }
}

me.sayHello();

const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
console.log(`Quantidade de meses no ano ${months.length}`);
const deleted = months.splice(2, 3);
console.log(deleted);