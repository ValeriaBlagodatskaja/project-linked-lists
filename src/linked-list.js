class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    let pointer;
    if (!this.head) {
      this.head = newNode;
    } else {
      pointer = this.head;
      while (pointer.nextNode) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }
    this.size++;
  }

  printList() {
    let pointer = this.head;

    while (pointer) {
      console.log(pointer.value);
      pointer = pointer.nextNode;
    }
  }
}

const list = new LinkedList();
list.append(5);
list.append(8);
list.append(10);

list.prepend(20);

list.printList();

console.log(list.size);
console.log(list.head);
