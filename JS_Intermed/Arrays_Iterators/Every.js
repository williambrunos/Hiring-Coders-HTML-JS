// Nessa iteração, se a condição for false, o every retorna false
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

const isEverybodyMajor = idadeFamilia.every(member => member.idade >= 18);
console.log(`${isEverybodyMajor === true? "Todos são de maior!":"Nem todos são de maior!"}`);