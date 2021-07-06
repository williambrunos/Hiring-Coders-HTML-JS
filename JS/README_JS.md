## Variáveis

Variáveis são espaços em memória que armazenam certos valores dependendo dos
seus tipos. Podemos acessar esses valores e manipulá-los através dos nomes das
variáveis.

### Var

Define variável de **escopo global**, permite **redeclaração**, e ainda sofre
**hoisting**.

```JS
/*
  var myName;
  console.log(myName); undefined
  myName = "William";

  -> Hoisting
*/
console.log(myName); //undefined
var myName;
myName = "William";
```

### let

Let possui um **escopo local**, não permite redeclaração.

### const

Const possui um **escopo local**, não permite redeclaração, **_não pode ser
ressignificado_**. Precisa ser inicializada logo após sua declaração.

## Tipos de dados

JavaScript possui uma tipagem de dados dinâmica, ou seja: o tipo de suas variáveis
são dinâmicas, dependendo do tipo de dado que ela guarda. Assim, podemos modificar
o tipo de dado da nossa variável modificando o conteúdo em seu interior.

```JS
const myName = "William" // String
let myAge = 18 // Number -> Integer and Floating Point
let isMajor = (myAge >= 18) // Boolean -> true ou false
// null -> Um objeto que não existe
// undefined -> Um objeto que existe, mas seu valor não foi atribuído

// Object -> Mapeamento chave:valor -> object = { chave: valor, chave: valor }

let me = {
  name: "William",
  age: 18,
  sayHello: function() {
    // This -> Se referencia a um atributo do objeto que chama a função.
    console.log(`Hello, i'm ${this.name} and i'm ${this.age} years old`);
  }
}

// Arrays -> Guardam variáveis de tipos dinâmicos em alocação sequencial de
// memória

const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
// Herdam da chain of responsibility various of attributes and methods.
```

## Operadores

É importante não só armazenar dados, mas também saber como tratá-los.

### Aritméticos

Operadores mais básicos da matemática

```JS
/*
  + -> Soma
  - -> Subtração
  * -> Produto
  / -> Divisão
  % -> Resto de uma divisão inteira
  ++ -> Incremento
  -- -> Decremento
*/
```

### Comparação

Operadores que comparam de forma lógica valores dentro do programa.

```JS
/*
  e -> &&
  ou -> ||
  não -> !
  igualdade de valores -> == -> compara valores de objetos
  igualdade de tipos -> === -> compara valores de objetos e de tipos
*/
```

## Condicionais

Estruturamos nosso código com condicionais para termos certas execuções apenas
quando certa condição for verdadeira.

```JS
/*
  if(condição) {
    código 1
  }else if(condição 2) {
    código 2
  }else {
    código 3
  }

  obs: checar valores truthy e falsy
*/
```

Podemos utilizar uma estrutura switch que checa se uma variável assume valores
específicos com switch case

```JS
switch(variable) {
  case valor_1:
    // código
    break;
  case valor_2:
    // código
    break;
  default:
    // código de backup
}
```

## Estruturas de repetição

```JS
while(condição) {
  code...
}

for(let i = 0; i < value; i++) {
  code...
}

do {
  code...
} while(condição);
```

## Funções

Funções são o cerne do JavaScript.

### Functions declarations

Mais clássica, sofre hoisting. O hoisting se deve ao fato de que funções
declaradas dessa forma são carregadas em memória pela engine do JS antes do
programa todo ser executado, isso é feito pelo reconhecimento da palavra chave
**function**.

```JS
sayMyName();

function sayMyName() {
  console.log(`Heisenberg`);
}
```

### Functions expressions

Guardar o nome de uma função dentro de uma variável. Em JS, funções são objetos,
logo podem ser manipuladas como todos os outros, como guardadas em variáveis,
chamadas ou até mesmo serem retornadas por outra função. Por meio de function
declarations, as mesmas **não sofrem hoisting**.

```JS
let sayMyName = function() {
  console.log(`Heisenberg`);
}
```

### Arrow functions

Implementadas no ES6, são formas de escrever as functions expressions de uma
maneira mais simples, reduzindo o código e auxiliando no seu entendimento.

**Não há necessidade da palavra-chave function**

```JS
let sayMyName = () => {
  console.log(`Heisenberg`);
}
```

Arrow functions possuem um retorno implícito se digitarmos apenas uma expressão
ao final de "=>", sem ter mesmo o return.

````JS
const sum = (num1, num2) => num1 + num2;

console.log(sum(2, 3)); // 5
````

### Callback Functions

Funções passadas como argumentos para outras funções. Esse tipo de função respeita
a ordem de execução das outras, ou seja: não temos aquele comportamento de
comportamento assíncrono, quando uma função é executada antes da outra que levará
um tempo a ser executada, mesmo que declarada após a primeira.

**IMPEDE COMPORTAMENTOS DE ASSINCRONISMO, MANTENDO A ORDEM DE EXECUÇÃO DAS FUNÇÕES**

### Anonymous Functions

Este tipo de funções são aquelas nas quais não possuem nome, não a armazenamos na
call stack, apenas a executamos uma vez ou a cada vez que um evento ocorrer.

````JS
listForm.addEventListener("submit", (e) => {
  // código...
  // Função anônima
})
````

## Classes

Classe é o básico de POO, suportada por JS desde o ES6. A classe é um molde 
para objetos, instâncias em memória HEAP cujo acesso é feito por um ponteiro.

Podemos definir uma classe por meio da palavra-chave **class**, adicionando um
método construtor próprio por meio de **constructor()**, passando os atributos
(ou não) que serão armazenados nos atributos da classe.

* Obs: **O operador this é usado para fazer referência a um atributo da classe**

Em uma classe só é permitida a utilização de métodos. A manipulação de atributos
é feita por meio destas. Na definição de um método novo(exceto o construtor), 
utilizamos apenas o seu nome, sem o function.

```JS
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  read() {
    return `Reading ${this.title}, from ${this.author} that has ${this.pages}`;
  }
}
```


## Herança

Herança faz parte dos conceitos pilares de Orientação a Objetos. Consiste em,
uma classe herdar os atributos e métodos de uma outra classe diferente, chamada
de **superclasse**, podendo assim reutilizar código e ainda criar outros métodos
dentro da **subclasse**. Facilitando a reutilização de código e manutenção do
software.

A herança em JS funciona quando utilizamos a palavra reservada **extends**.

Além disso, em nosso método construtor, temos que chamar o método **super**, que
invoca o método construtor da superclasse, instanciando seus atributos em nossa
subclasse. Podemos ainda ter outros atributos próprios, desde que os declaremos em
nosso construtor da subclasse e não os passemos como argumentos no método super(pois
pertence apenas à subclasse em questão).

````JS
// A classe ITBooks estende, herda, os atributos e métodos da classe Book
class ITBook extends Book {
  constructor(title, author, pages, technology) {
    super(title, author, pages);
    this.technology = technology;
  }
}

read() {
  const propsNotDefined = this.title === undefined || 
                            this.author === undefined ||
                            this.pages === undefined ||
                            this.technology === undefined;
    
    if(propsNotDefined) {
      throw new Error("Book title, author, technology" +
       + "or pages might have be undefined");
    }else {
      return `Reading ${this.title}, from ${this.author} that has ${this.pages} pages. Technology: ${this.technology}`;
    }
}
````

Podemos ainda reescrever métodos que estão presentes na superclasse. Neste caso, o
método reescrito terá prioridade de execução do que aquele presente na superclasse.

## Encapsulamento

Com o encapsulamento, podemos proteger certos atributos da nossa classe. Fazemos
isso colocando um "_" após sua inicialização no método construtor. Dessa forma,
não temos acesso direto ao atributo, mas podemos fazê-lo por meio da função
get -> retorna o valor no atributo desejado e o set -> atribui um valor ao atributo
desejado.

````JS
class Person {
  constructor(name) {
    // Inicialização de um atributo name encapsulado
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
````

## Template Strings(Literals)

Forma de unir expressões JS com Strings, sem utilizar o '+'. É uma forma mais
atual e prática de unir JS com strings, sem utilizar concatenação, mas sim
interpolação. Dessa forma, nossas strings declaradas em JS permitem a utilização
de expressões dentro delas.

### Sem Interpolação -> Utiliza-se "" ou ''

````JS
const myName = "William";
console.log("Hello, my name is " + myName);
````

### Com Interpolação -> Utiliza-se ``

````JS
const myName = "William";
console.log(`Hello, my name is ${myName}`);
````

## Operador Ternário

Este operador é uma alternativa a escrita de um if...else, sem else if!
Testa apenas duas condições, se é verdadeira ou falsa.

````JS
// const boolean = (teste_lógico) ? Retorno_Verdadeiro: Retorno_Falso;

function verifyMajority(age) {
  const isMajor = age >= 18 ? "Is Major": "Isn't major";
  
  return isMajor;
}
````

## Arrays

### Map

O método map pertence à cadeia de protótipos dos arrays em js. Este método consiste
em passar como argumento uma callback function, que será executada para cada
elemento pertencente ao array(iterar) sem modificá-lo.

````JS
const gamaStudents = ["William", "Maria", "João", "Marcos"];
gamaStudents.map((student) => {
  console.log(student);
});
````

### Filter

O método filter irá criar um novo array baseado nos elementos anteriores de um array.
O método aceita como argumento uma callback function tal que, se seu retorno for
true, o elemento é adicionado ao novo array, se não ele não é adicionado.

* Ex: Queremos guardar os valores ímpares de um array dentro de outro array.
Filtrar elementos de um array <=> Método filter :)

````JS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Itera para cada number de numbers a condição e salva number em oddNumbers
// se e somente se number % 2 != 0 (condição de ser ímpar)
const oddNumbers = numbers.filter((number) => {
  return number % 2 != 0;
});
````

### Reduce 

Um método de um array capaz de reduzir os elementos a uma expressão matemática.

````JS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const soma = numbers.reduce((previous, next) => {
  return previous + next;
}, 2);
````

O método acima irá iterar para cada número previous do array numbers e irá somá-lo
com o próximo número, 'next'. Ao final, a soma ainda será incrementada a um valor
2(arbitrário) e será retornada à variável soma.

## Objects Destructuring

Maneiras de desconstruir, pegar atributos de objetos ou arrays.

### Operador .

Basta adicionar um . logo após o objeto.

### ['property']

````JS
const obj = {
  property: value,
};

console.log(obj['property']);
````

### Destructuring

Podemos acessar atributos de um objeto apenas usando {} e os nomes de seus atributos.

````JS
const pessoa = {
  name: "William",
  age: 18,
  city: "Sobral",
};

const { name, age, city } = pessoa;

console.log(`Hi, my name is ${name}, i'm ${age} years old and from ${city}`);
````

Quando tratamos de arrays de objetos, o mais interessante é utilizarmos um método
map para iterar sobre esses objetos e executar uma callback function.

## Desenvolvimento Web atual

### SPA - Single Page Applications

Aplicações web de única página. Ou seja, todos os componentes da web são dispostos
em uma única página web, de forma que a página não é recarregada toda vez que tenha
uma atualização de dados, apenas a parte realmente necessária.
**React, Angular, Vue**

### PWA - Progressive Web App

Aplicações híbridas para web, disponíveis para desktop e mobile, sem necessariamente
instalar a aplicação.

### Web Components

Criação de componentes para web com html, css e js, códigos modularizados e reutilizáveis.