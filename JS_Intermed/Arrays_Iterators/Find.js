// O método find retorna true no momento em que a condicional retorna true pela
// primeira vez -> Não itera mais o array, que nem o every ou some
const desserts = [{
  nome: 'pudim',
  diet: true,
},
{
  nome: 'gelatina',
  diet: false,
},
{
  nome: 'bolo de chocolate',
  diet: false,
},
{
  nome: 'pavê',
  diet: true,
},
];

// Retorna o primeiro item
const dietItem = desserts.find(dessert => dessert.diet);
console.log(dietItem.nome);

// Exemplo 2 -> Com filter

const dietItem2 = desserts.filter(dessert => dessert.diet === true);
console.log(dietItem2);