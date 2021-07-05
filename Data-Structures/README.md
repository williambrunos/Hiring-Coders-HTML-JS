# Oh, Hello There Again!

Esta é a seção de estruturas de dados, ou seja: formas de armazenar, buscar e
remover dados de uma forma efetiva dependendo do nosso contexto. Veremos pilhas,
filas, listas e alguns algorítmos de ordenação também.

Nas ED, teremos interfaces nas quais consumimos métodos e criamos nossas estruturas.

## Pilha - Queue

A lógica da construção de uma pilha é FILO -> First In Last Out -> Primeiro a entrar
é o último a sair -> Regra de acesso aos elementos.

### Push

Método na qual insere um elemento no topo de uma pilha.

### Pop

Método na qual retira um elemento do topo de uma pilha.

## Fila - Queue

A ordem de inserção e remoção na fila é dada por FIFO -> First In First Out ->
Primeiro a entrar é o primeiro a sair.

## Lista

Conjunto de dados dispostos de forma a "Não haver limite de elementos", mesmo sabendo
que a capacidade de armazenamento de dados em um computador é finita.

## Buscas

Algorítmos que buscam elementos em conjuntos de dados diversos.

### Busca Linear

Algoritmo mais simples, consiste em buscar elemento a elemento dentro do array e
retornar o índice no qual a chave se encontra, ou undefined caso contrário. 
**Complexidade temporal O(n).**

### Busca Binária 

Esse algoritmo exige que o array já esteja ordenado em ordem crescente ou decrescente,
variando a lógica do algoritmo em cada ordem. **Complexidade temporal O(log(n)).**

## Hash Table

Conjunto de valores(objetos) dados por conjuntos de "chave: valor", tais que
chaves não se repitam. Fazemos um mapeamento da chave a uma posição dentro da
tabela hash, com **complexidade temporal constante O(1);**