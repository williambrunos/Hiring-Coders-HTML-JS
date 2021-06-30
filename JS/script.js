// Hoisting
console.log(myName);
var myName;
myName = "William";

// Object
let me = {
  name: "William",
  age: 18,
  sayHello: function() {
    console.log(`Hello, i'm ${this.name} and i'm ${this.age} years old`);
  }
}

me.sayHello();

// Array e Chain of responsibility 
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
 "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
console.log(`Quantidade de meses no ano ${months.length}`);
const deleted = months.splice(2, 3);
console.log(deleted);

for(let i = 0; i < months.length; i++) {
  console.log(`${months[i]}`);
}