/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  isEmpty() {
    return !this.head;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode= new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop(val) {
    if (this.isEmpty()) {
      return null;
    }

    if (!this.head.next) {
        const removedVal = this.head.val;
        this.head = null;
        this.tail = null;
        this.length--;
        return removedVal;
    }
    
    let currentNode = this.head
    let prevNode = null;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = prevNode;
    
    if (!prevNode) {
      this.head = null;
    } else {
      prevNode.next = null;
    }

    this.length--;
    return currentNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.isEmpty()) {
      return null;
    }
    const removedVal = this.head.val;

    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--;
    return removedVal;
  }
  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // check if array is empty
    if (this.isEmpty()) {
      return null;
    }
    // check if the index exsits in arr
    if (idx < 0 || idx > this.length) {
      return null;
    } 

    let currentNode = this.head;
    
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next
    }

    return currentNode.val
    
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.isEmpty()) {
      return null;
    }

    // check if the index exsits in arr
    if (idx < 0 || idx > this.length) {
      return null;
    } 

    let currentNode = this.head;
    
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next
    }
    if(!currentNode) {
      return null
    }
    currentNode.val = val;
    return val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // creating new node
    const newNode = new Node(val);

    // checking if idx exsists inside the arr
    if (idx < 0 || idx > this.length) {
        return null;
    }

    // checking if arr is empty
    if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        // replacing head with new node if idx is 0
        if (idx === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let prevNode = this.head;
            for (let i = 0; i < idx - 1; i++) {
                prevNode = prevNode.next
            }
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            if (idx === this.length) {
                this.tail= newNode;
            }
        }
    }
    this.length++;
    return val;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length) {
      return null;
    }
    let removedVal;

    if (idx === 0) {
        removedVal = this.head.val
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
      }
    } else {
      const prevNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        prevNode = prevNode.next;
      }
      const delNode = prevNode.next;
      removedVal = delNode.val;
      prevNode.next = delNode.next
      if (!prevNode.next) {
        this.tail = prevNode;
      }
    }
    this.length--
    return removedVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;

    if (this.isEmpty()) {
      return 0;
    }
    let current = this.head;
    let idx = 0

    while (current) {
      sum += current.val;
      current = current.next;
      idx++
    }
    return sum/ idx;
  }
}

module.exports = LinkedList;
