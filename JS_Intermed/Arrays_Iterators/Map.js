const celsius = [0, -20, 30, -40, 50, 200, -300];

// O método map não altera o array principal! -> Retorna um novo array
const fahrenheit = celsius.map( temperature => (temperature * 1.8) + 32);
fahrenheit.forEach( value => console.log(value));