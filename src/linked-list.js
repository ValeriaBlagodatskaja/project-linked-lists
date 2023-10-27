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
    let pointer, previous;

    //Set pointer first
    pointer = this.head;
    let count = 0;

    while (count < index) {
      previous = pointer; //Node before index
      count++;
      pointer = pointer.nextNode;
    }
    newNode.nextNode = pointer;
    previous.nextNode = newNode;

    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let pointer = this.head;
    let previous;
    let count = 0;

    //Remove first
    if (index === 0) {
      this.head = pointer.nextNode;
    } else {
      while (count < index) {
        count++;
        previous = pointer;
        pointer = pointer.nextNode;
      }
      previous.nextNode = pointer.nextNode;
    }
    this.size--;
  }

  //Removes the last element from list

  pop() {
    let currPointer = this.head;
    let nextPointer = this.head.nextNode;

    if (!this.head) {
      return null;
    }
    while (nextPointer.nextNode !== null) {
      currPointer = currPointer.nextNode;
      nextPointer = nextPointer.nextNode;
    }
    const returnNode = nextPointer;
    currPointer.nextNode = null;
    this.size--;
    return returnNode;
  }

  contains(value) {
    let pointer = this.head;
    while (pointer !== null) {
      if (value === pointer.value) return true;
      pointer = pointer.nextNode;
    }
    return false;
  }

  find(value) {
    let indexCount = 0;
    let pointer = this.head;
    while (pointer !== null) {
      if (value === pointer.value) return indexCount;
      pointer = pointer.nextNode;
      indexCount++;
    }
    return null;
  }

  toString() {
    let output = "";
    let pointer = this.head;

    while (pointer !== null) {
      output += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    output += "null";
    return output;
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
list.insertAt(500, 2);

list.removeAt();
list.pop();
list.printList();
console.log(list.toString());
console.log(list.find(200));
list.at(1);
console.log(list.contains(8));
console.log(list.size);
console.log(list.head);
list.tail();
