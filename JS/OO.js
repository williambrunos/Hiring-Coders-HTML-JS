class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

// Adding read() function to Book prototype (chain of responsibility)

Book.prototype.read = function() {
  if(this.title === undefined || this.author === undefined || this.pages === undefined) {
    throw new Error("Book title, author or pages might have be undefined");
  }else {
    return `Reading ${this.title}, from ${this.author} that has ${this.pages} pages`;
  }
}

// Inheritance
class ITBook extends Book {
  constructor(title, author, pages, technology) {
    super(title, author, pages);
    this.technology = technology;
  }

  read() {
    
  }
}

// Adding read() function to ITBook prototype (chain of responsibility)

ITBook.prototype.read = function() {
  const propsNotDefined = this.title === undefined || 
                            this.author === undefined ||
                            this.pages === undefined ||
                            this.technology === undefined;
    
  if(propsNotDefined) {
    throw new Error("Book title, author, technology" +
      + "or pages might have be undefined");
  }else {
    return `Reading ${this.title}, from ${this.author} that has ${this.pages} pages.Technology: ${this.technology}`;
  }
}

// Criação de objetos -> new constructor(args);

// Books
let myBook = new Book("abacaxi","mora no mar", 32);

try {
  console.log(myBook.read());
} catch(e) {
  console.log("Por favor, defina um valor para autor, título e número de páginas"
  + "na criação do livro");
}

// ITBooks
let itBook = new ITBook("abacaxi", "banana", 200, "JS");

try {
  console.log(itBook.read());
} catch(e) {
  console.log("Por favor, defina um valor para autor, título e número de páginas"
  + "na criação do livro");
}

// Class Person

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let person = new Person("William");

console.log(person.name);
person.name = "Pedro";
console.log(person.name);