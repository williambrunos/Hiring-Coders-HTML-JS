// Retorna true se algum elemento do array favorecer a condição adotada
const idadeFamilia = [{
  nome: 'Vanessa',
  idade: 39
},
{
  nome: 'Gabriel',
  idade: 39
},
{
  nome: 'Bielzinho',
  idade: 11
},
{
  nome: 'Felipe',
  idade: 3
},
];

const isSomeoneMajor = idadeFamilia.some(member => member.idade >= 18);
console.log(`${isSomeoneMajor === true ? "Existe uma pessoa de maior!":"Nenhuma pessoa é de maior!"}`);