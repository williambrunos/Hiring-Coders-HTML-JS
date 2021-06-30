/*
  * Algoritmo FizzBuzz:

  número divisível por 3? => "Fizz"
  número divisível por 5? => "Buzz"
  número divisível por 3 e 5? => "FizzBuzz"
  se não for número => não é número
  se não for divisível por 3 e nem por 5 => entrada
*/ 

function dividedByThreeAndFive(numero) {
  const isDivisibleByThreeAndFive = (numero % 3 == 0) && (numero % 5 == 0);

  return isDivisibleByThreeAndFive;
}

function dividedByThree(numero) {
  const isDividedByThree = ((numero % 3) == 0);

  return isDividedByThree;
}

function dividedByFive(numero) {
  const isDividedByFive = ((numero % 5) == 0);

  return isDividedByFive;
}

function fizzBuzz(numero) {
  // !isNan(numero) => Retorna true se não for o número / Retorna falso se for
  // um número
  if(!isNaN(numero)) {
    return "Não é número";
  }

  if(dividedByThreeAndFive(numero)) {
    return "FizzBuzz";
  }else if(dividedByThree(numero)) {
    return "Fizz";
  }else if(dividedByFive(numero)) {
    return "Buzz";
  }else {
    return String(numero);
  }
}

console.log(fizzBuzz("5"));