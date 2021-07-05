function binarySearch(array, key) {
  // Supposing that the arrays is already sorted...
  let begin = 0;
  let end = array.length - 1;
  let mid;

  while(begin <= end) {
    mid = parseInt((begin + end) / 2);
    if(key > array[mid]) {
      begin = mid + 1;
    } else if (key < array[mid]) {
      end = mid - 1;
    } else if (key == array[mid]) {
      return mid;
    }
  }

  return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let index = binarySearch(array, 1);
console.log(index);