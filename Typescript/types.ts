// var/let/const nome_variável: tipo_de_dado = valor_possível

// boolean
const isCountPaid: boolean = true;

// number
const age: number = 18;
const salary: number = 3500.50;

// string
const nome: string = "William Bruno";

// array
const ages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondAges: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// tuple
const tuple: [string, string, string] = ["William", "Bruno", "Sales"];

// enum

enum statusAprovacao {
  Aprovado, // 0
  Reprovado, // 1
  Pendente, // 2
}

const statusAluno: statusAprovacao = statusAprovacao.Aprovado;

// Never

function loopInfinito():never {
  while(true) {
    console.log("Olá");
  }
}

// union types -> uma variável pode ser do tipo1 ou tipo2 -> |
// variável nota do tipo number ou string
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}

exibirNota('3');

const pessoasOuNumeros: Array<string | number> = [1, "Vitor"];

// Type Alias -> Método para criar nossas próprias tipagens

type Funcionario = {
  nome: string;
  idade: number;
  cargo: string;
};

type Funcionarios = Array<Funcionario>;
const array: Funcionarios = [
  {nome: "William", idade: 18, cargo: "devweb"},
  {nome: "Marcos", idade: 19, cargo: "Técnico de TI"}
];

function mostraFuncionarios(funcionarios: Array<Funcionario>) {
  funcionarios.map( funcionario => console.log(funcionario.nome) );
}

mostraFuncionarios(array);

// Type Assertion -> (variable as type) -> Casting
let idade: any = 19;
// idade.toString() -> Não reconhecido
let idadeString = (idade as number).toString();

/*
  Erro, pois HTMLElement não possui atributo value

  const input = document.querySelector("input");
  console.log(input.value);
*/

// Sem erros mais :)
const input = document.querySelector("input") as HTMLInputElement;
console.log(input.value);