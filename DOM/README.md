# What is DOM?

DOM se refere à Document Object Model, modelo de documentação por objeto. Se
refere ao manuseio de HTML por meio de JS. Como isso é feito? o documento(Document)
HTML é tratado como um objeto(Object), logo possui métodos e atributos disponíveis
para utilização e manuseio do conteúdo da nossa página por meio de JS.

Document é o objeto pai de todos os elementos HTML, no mais alto nível de hierarquia
exceto pela janela do browser na árvore de responsabilidades. Seguido do document,
temos o próprio html e suas tags de estruturação.

## Methods 

### Captura de elementos html
#### getElementById("Id"); -> html element

````JS
const htmlElement = document.getElementById("htmlId");
````

retorna um objeto da estrutura do html com o id indicado ou null caso não encontrado.

#### getElementsByClassName("ClassName"); -> html Collection

````JS
const htmlCollection = document.getElementsByClassName("htmlClassName");
````

retorna um array(collection) de objetos html com o nome da classe passado como
argumento para o método.

#### getElementByTagName("TagName"); -> html Collection

````JS
const htmlCollection = document.getElementByTagName("htmlTagName");
````

retorna uma coleção de objetos html com a tag name passada como argumento.

#### querySelector("CSSQuerySelector"); -> html element

````JS
const htmlElement = document.querySelector("querySelector");
document.querySelector("#identifier") // se tiver o id como "identifier"
document.querySelector(".classe") // se tiver o atributo class como "classe"
document.querySelector("[src]") // se tiver o atributo src
````

retorna um elemento html, o primeiro de cima para baixo da árvore de elementos,
com o seletor css indicado -> Nome de classe, id, se tiver certo atributo etc.

#### querySelectorAll("CSSQuerySelector); -> Node List

retorna uma Node List de elementos html com todos os seletores css dentro do documento
html.

Qual a diferença entre um html collection retornado no getElementsByClassName e
o Node List do querySelectorAll? O Node List permite a execução de um For Each,
já o html collection não permite :)

### Manipulando conteúdos

Faremos esses tipos de manipulações por meio de atributos de objetos html

#### textContent e innerText

Alteramos o conteúdo de texto dentro de um elemento ou capturá-lo para manipulação.

````JS
const paragraph = document.querySelector("p");
paragraph.textContent = "Oh my gooooooooooooood";
paragraph.innerText = ", Jesus christ!";
````

#### innerHtml

Alteramos o html interno de um elemento -> O html considerado "filho" do elemento.

#### value

Modificamos ou capturamos o valor guardado dentro de uma tag input.

````JS
const element = document.querySelector("input");
console.log(element.value);
element.value = "outro valor";
````

#### setAttribute

Adiciona um atributo juntamente com seu valor a um elemento html

````JS
element.setAttribute("atributo", "valor");
````

#### getAttribute

Retorna o valor dentro de um certo atributo informado no argumento do método.

````JS
const attribute = element.getAttribute("class") // retorna o nome da classe
````

#### removeAttribute 

Remove o atributo passado como argumento do método.

````JS
element.removeAttribute("id"); // remove o atributo id do elemento
````

### Alterando Estilos

Acessamos o atributo style de cada elemento e acessamos a propriedade que quisermos,
colocando um valor a esta.

Podemos ainda acessar a lista de classes de um elemento, adicionando ou removendo-as.
O método toggle busca o estado de uma classe: se ela existe, ele remove. Se ela não
existe, ele cria -> toggle -> switch -> on/off

### Navegando pelos elementos

#### Pelos elementos pais

Atributo parentNode ou parentElement de algum elemento html.

#### Pelos elementos filhos

Atributo childNodes -> Retorna um NodeList com os elementos html filhos do elemento
em questão -> Leva textos e espaços vazios do documento html.

Atributo children -> Retorna um htmlCollection -> Sem textos e espaços vazios.

Atributos first/last Child -> Retorna o primeiro/último elemento html contando com
textos e espaços vazios.

Atributos first/last ElementChild -> Retorna o primeiro/último elemento html sem
contar com textos e espaços vazios.

#### Pelos elementos irmãos

Atributo first/last Sibling -> Retorna o primeiro ou último irmão do
elemento em questão -> leva em conta textos e espaços em branco.

Atributo first/last ElementSibling -> Retorna o primeiro ou último elemento irmão
do elemento em questão -> exclui textos e espaços em branco.

### Criando elementos

````JS
const element = document.createElement("ElementName"); // "div" por exemplo
````

Adicionando no final do documento html -> método append -> do body
Adicionando ao final do documento html -> método preappend

Adicionando antes de um elemento específico:

````JS
parentElement.insertBefore("elementToAdd", "beforeWichElement?");
````

Adicionando depois de um elemento específico (target) :

````JS
parentElement.insertBefore("elementToAdd", "targetElement.nextElementSibling");
````