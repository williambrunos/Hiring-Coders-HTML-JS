function convertToFahrenheit(value) {
  if(isNaN(value)) {
    throw new Error("Invalid Value to convert");
  }

  const celsius = (value - 32) * (5/9);

  return celsius;
}

console.log(convertToFahrenheit(35));