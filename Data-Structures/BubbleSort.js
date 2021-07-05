function bubbleSort(values) {
  for(let i = 0; i < values.length; i++) {
    for(let j = 0; j < values.length - 1; j++) {
      if(values[j] > values[j+1]) {
        let tmp = values[j];
        values[j] = values[j+1];
        values[j+1] = tmp;
      }
    }
  }

  return values;
} 

let values = [10, 6, 4, 2, 8, 5, 1, 0, 3, 7, 9];
values = bubbleSort(values);
console.log(values);