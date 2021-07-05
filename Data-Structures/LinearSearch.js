function linearSearch(numbers, key) {
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] == key) {
      return i;
    }
  }
  return undefined;
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let random = parseInt(Math.random() * 11);
let index = linearSearch(numbers, random);

if(index != undefined) {
  console.log(index);
}else {
  console.log("Não encontrado");
}