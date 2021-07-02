const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');


let lists = [];

/* 
  Estamos monitorando eventos em nosso formulário, passando que o evento é do
  tipo 'submit' e recebendo esse objeto evento na função anônima passada como
  argumento. Por padrão(default), a cada submit dado em um formulário, o navegador
  recarrega a página. Para evitar que isso ocorra, usamos o método preventDefault()
  do event.
*/ 

newListForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const listName = newListInput.value;
  // Não tem item na entrada do forms
  if(listName === null || listName === '') {
    return ;
  }

  const list = createList(listName);
  newListInput.value = null;

  lists.push(list);

  render();
});

function render() {
  clearElement(listContainer);
  lists.forEach((list) => {
    const item = document.createElement('li');
    item.classList.add("li");
    item.innerText = list.name;
    listContainer.appendChild(item);
  });
}

function createList(name) {
  return {
    id: Date.now().toString(),
    name: `${name}`,
  }
}

function clearElement(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}