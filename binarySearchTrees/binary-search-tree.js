class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) 
  {
    const newNode = new Node(val);

    if (this.root === null) {
        this.root = newNode;
        return this
    }

    let currentNode = this.root;
    while(true) {

        if (val < currentNode.val) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
                return this;
            }
                currentNode = currentNode.left;
        } else if (val > currentNode.val) {
            if (currentNode.right === null) {
                currentNode.right = newNode;
                return this;
            }
                currentNode = currentNode.right;
        } else {
                return this;
        }
      }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) 
  {
    function insertNode(node, val) {
      if (node === null) {
        return new Node(val);
      }

      if (val < node.val) {
          node.left = insertNode(node.left, val);
      }

      else if (val > node.val) {
          node.right = insertNode(node.right, val);
      }
      return node;
    }
    this.root = insertNode(this.root, val);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) 
  {
    if (!this.root) return undefined;
    let currentNode = this.root;

    while (currentNode) 
    {
      if (currentNode.val === val) {
          return currentNode;
      
      } else if (val === currentNode.val) {
          currentNode = currentNode.left
      } else {
          currentNode = currentNode.right;
      }
    }
      return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) 
  {
    function findNode(node, val) 
      {
        if (node === null) {
            return undefined;
        }
        if (node.val === val) {
            return node;
        } else if (val < node.val) {
            return findNode(node.left, val)     
        } else {
            return findNode(node.right, val)
        }
      }
      return findNode(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() 
  {
    const visitedNodes = [];

    function traverse(node) 
    {
      if (node === null){
        return;
      }
      visitedNodes.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return visitedNodes
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() 
  {
    const visitedNodes = [];

    function traverse(node)
    {
      if(node === null) {
        return;
      }
      traverse(node.left);
      visitedNodes.push(node.val);
      traverse(node.right);
    }
    traverse(this.root);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() 
  {
    const visitedNodes = [];

    function traverse(node)
    {
      if(node === null) {
        return;
      }
      traverse(node.left);
      traverse(node.right);
      visitedNodes.push(node.val);
    }
    traverse(this.root);
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() 
  {
    const visitedNodes = [];
    const queue = [];
    
    if (this.root !== null) {
        queue.push(this.root);
    }

    while(queue.length > 0) {
      const node = queue.shift();
      visitedNodes.push(node.val);

      if (node.left !== null) {
          queue.push(node.left);
      }

      if (node.right !== null) {
          queue.push(node.right);
      }
    }
    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
