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