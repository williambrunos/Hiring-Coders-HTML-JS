/* Utilizando variáveis */
// var -> sofre hoisting -> Escopo global -> A engine a salva logo em memória
// let e const -> Não sofrem hoisting -> Escopo local

/* Concatenação VS Interpolação */
const name = "William";

console.log("Isto é uma concatenação " + name);
console.log(`Isto é uma interpolação ${name}`);

/* Média de números */

let media = (1+2+3+4+5)/5;

/* Lucrar */

function lucrar() {
  const taxaDeVenda = 60/100;
  const preco = 300;
  const lucro = 25/100;

  const precoBicicleta = preco / (taxaDeVenda);
  const precoDeLucro = precoBicicleta + (precoBicicleta * lucro);

  return precoDeLucro;
}
console.log(lucrar());

/* Venda com desconto */

function venda() {
  return 3000 - (3000 * (25/100));
}

console.log(venda());

/* Pares entre 0 e 100 */

function paresEntre0E100() {
  for(let i = 0; i <= 100; i++) {
    if(i % 2 == 0) {
      console.log(i);
    }
  }
}

// paresEntre0E100();

/* Fatorial */

function fatorial(num) {
  if(num == 1 || num == 0) {
    return 1;
  }

  if(num < 0) {
    throw new Error("Please give a positive input for the function");
  }
  return num * fatorial(num-1);
}

try {
  console.log(fatorial(5));
}catch(e) {
  console.log(e);
}

/* Dias para horas */

function dayToHour(days) {
  return days * 24;
}

console.log(`2 Dias possuem ${dayToHour(2)} horas`);