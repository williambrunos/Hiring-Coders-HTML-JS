const bolsaVanessa = ["Dinheiro", "Cartão", "Álcool em gel", "Pente", "Carteira de motorista"];

// Classic For

for(let i = 0; i < bolsaVanessa.length; i++) {
  console.log(bolsaVanessa[i]);
}

// For In -> Enumera índices

const familia = [
  {
    nome: "Gabriel",
    funcao: "Pai",
  },
  {
    nome: "Vanessa",
    funcao: "Mãe",
  },
  {
    nome: "Gabriel",
    funcao: "Filho",
  },
  {
    nome: "Felipe",
    funcao: "Filho",
  }
];

for(let pessoa in familia) {
  console.log(familia[pessoa]);
}