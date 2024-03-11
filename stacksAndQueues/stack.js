/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
        this.first = newNode;
        this.last = newNode;
    } else {
        this.last.next= newNode;
    }
    this.last = newNode;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) {
      throw new Error('Stack is empty');
    }

    let currentNode = this.first;
    let previousNode = null;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next
    }

    const poppedVal = currentNode.val;

    if (previousNode) {
        previousNode.next = null;
        this.last = previousNode;
    } else {
        this.first = null;
        this.last = null;
    }

    this.size--;
    return poppedVal;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.first) {
      throw new Error('Stack is empty')
    }
    return this.last.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.first === null;
  }
}

module.exports = Stack;
