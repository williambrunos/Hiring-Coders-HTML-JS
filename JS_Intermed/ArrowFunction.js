console.log("Using callback\n");

function saySomethingWithCallBack(callback) {
  callback();
  console.log("Inside the function after the callback execution");
}

// A função que executa o console log é chamada de função callback
// Funções de callback são aquelas passadas/recebidas como argumentos em funções
saySomethingWithCallBack( () => {
  console.log("Hello, William!");
} );

console.log("Without callback\n");

function saySomethingWithoutCallBack(callback) {
  setTimeout(callback, 5000);
  // JS asynchronism 
  console.log("Inside the function after the callback execution");
}

saySomethingWithoutCallBack(() => {
  console.log("William");
})

/* Lidando com encapsulamento */

let calculate = (num1, num2, calcType) => {
  if (calcType === "add") {
    return num1 + num2;
  } else if (calcType === "multiply") {
    return num1 * num2;
  } else if (calcType === "subtract") {
    return num1 - num2;
  } else if (calcType === "divide") {
    return num1 / num2;
  } else {
    return "Invalid Option";
  }
}

let calc = (num1, num2, calcType) => calculate(num1, num2, calcType);

console.log(calc(1, 2, "add"));