class Stack {
  constructor() {
    this._top = null;
    this._count = 0;
  }

  numberOfElements() {
    return this._count;
  }

  is_empty(list) {
    return list === null;
  }

  peek() {
    if(!this.is_empty(this._top)) {
      return this._top.data;
    } else {
      return null;
    }
  }

  push(param) {
    let node = {
      data: param,
      next: null,
    };

    node.next = this._top;
    this._top = node;
    this._count++;
  }

  pop() {
    if(this.is_empty(this._top)) {
      console.log("A lista já está vazia");
    } else {
      let aux = this._top;
      this._top = this._top.next;

      this._count--;
    }
  }

  print() {
    let aux = this._top;

    while(aux != null) {
      console.log(aux.data);
      aux = aux.next;
    }
  }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.pop();
s.pop();

let aux = s.peek();
console.log(aux);
s.print();