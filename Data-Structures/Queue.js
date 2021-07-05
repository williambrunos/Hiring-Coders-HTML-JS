class Queue {
  constructor() {
    this.queue = [];
  }

  size() {
    return this.queue.length;
  }

  enqueue(param) {
    this.queue.push(param);
  }

  dequeue() {
    if (this.queue.length > 0) {
      return this.queue.shift();
    } else {
      console.log("Fila vazia!");
    }
  }

  print() {
    this.queue.map((element) => {
      console.log(element);
    });
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

q.dequeue();
q.dequeue();

q.print();