function saySomething(func) {
  func();
}

// A função que executa o console log é chamada de função callback
// Funções de callback são aquelas passadas/recebidas como argumentos em funções
saySomething( () => {
  console.log("Hello, William!");
} );