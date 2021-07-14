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