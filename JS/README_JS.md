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

  Const possui um **escopo local**, não permite redeclaração, ***não pode ser
  ressignificado***. Precisa ser inicializada logo após sua declaração.

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