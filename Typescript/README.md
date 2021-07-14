## Introdução

Introdução ao Typescript

## O que é?

Superset de JavaScript, ou seja: um conjunto de artifícios adicionados em cima
do js a fim de melhorar a experiência de codificação.

* Tipagem estática
* Interfaces
* Enums 
* Decorators
* Generics

**obs:** O typescript não é interpretado pelos browsers, mas sim transpilado
pelo mesmo e convertido em js para seu consumo.

O ganho de performance do TS é puramente no desenvolvimento, tipando os atributos
e os retornos das funções. Se torna um ganho de produtividade quando o time de
desenvolvimento conhece TS, pois conseguem entender e relembrar os tipos dos dados
que não são mais dinâmicos.

## Instalação

````
npm install -g typescript
````

https://www.typescriptlang.org/

## Motivação

Imagine declarar uma função que deveria obedecer uma certa execução, mas por
conta de passagens de argumentos de tipos errados temos o resultado "quebrado":

````JS
function somar(numero1, numero2) {
  return numero1 + numero2;
}

console.log(somar({nome: "William", idade: 18}, "50"));
````

## Configuração

````
tsc --init
````

Problemas com políticas de execução no windows?
https://www.youtube.com/watch?v=J30n3lMyvbY

No diretório do arquivo ts, digite tsc para transpilar ts em js
````
tsc
````