"use strict";
// var/let/const nome_variável: tipo_de_dado = valor_possível
// boolean
const isCountPaid = true;
// number
const age = 18;
const salary = 3500.50;
// string
const nome = "William Bruno";
// array
const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondAges = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// tuple
const tuple = ["William", "Bruno", "Sales"];
// enum
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao[statusAprovacao["Aprovado"] = 0] = "Aprovado";
    statusAprovacao[statusAprovacao["Reprovado"] = 1] = "Reprovado";
    statusAprovacao[statusAprovacao["Pendente"] = 2] = "Pendente";
})(statusAprovacao || (statusAprovacao = {}));
const statusAluno = statusAprovacao.Aprovado;
// Never
function loopInfinito() {
    while (true) {
        console.log("Olá");
    }
}
// union types -> uma variável pode ser do tipo1 ou tipo2 -> |
// variável nota do tipo number ou string
function exibirNota(nota) {
    console.log(`A nota é ${nota}`);
}
exibirNota('3');
const pessoasOuNumeros = [1, "Vitor"];
const array = [
    { nome: "William", idade: 18, cargo: "devweb" },
    { nome: "Marcos", idade: 19, cargo: "Técnico de TI" }
];
function mostraFuncionarios(funcionarios) {
    funcionarios.map(funcionario => console.log(funcionario.nome));
}
mostraFuncionarios(array);
// Type Assertion -> (variable as type) -> Casting
let idade = 19;
// idade.toString() -> Não reconhecido
let idadeString = idade.toString();
/*
  Erro, pois HTMLElement não possui atributo value

  const input = document.querySelector("input");
  console.log(input.value);
*/
// Sem erros mais :)
const input = document.querySelector("input");
console.log(input.value);
