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

  tail() {
    let pointer = this.head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    console.log(pointer);
    return pointer;
  }

  at(index) {
    let count = 0;
    let pointer = this.head;

    while (pointer) {
      if (count == index) {
        console.log(pointer.value);
        return pointer.value;
      }
      count++;
      pointer = pointer.nextNode;
    }
    return null;
  }

  //Insert at index
  insertAt(value, index) {
    //If index is out of range
    if (index < 0 || index > this.size) {
      return;
    }
    //If first index
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let current, previous;

    //Set current first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //Node before index
      count++;
      current = current.nextNode;
    }
    newNode.nextNode = current;
    previous.nextNode = newNode;

    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    //Remove first
    if (index === 0) {
      this.head = current.nextNode;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = current.nextNode;
    }
    this.size--;
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
//list.insertAt(500, 2);

list.removeAt(3);
list.printList();
//list.at(1);
//console.log(list.size);
//console.log(list.head);
//list.tail();
