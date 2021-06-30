function reverseString(string) {
  let newStr = "";
  for(let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }

  return newStr;
}

console.log(reverseString("Hello, Gama Academy!"));
