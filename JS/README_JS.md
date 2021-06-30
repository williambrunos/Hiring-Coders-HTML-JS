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