/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    function dfs(node) {
      if(!node) return;
      sum += node.val
      for (let child of node.children) {
        dfs(child)
      }
    }
    dfs(this.root)
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let sum = 0;

    function dfs(node) {
      if(!node) return;
      if (node.val % 2 === 0) {
        sum++;
      }
      for (let child of node.children) {
        dfs(child)
      }
    }
    dfs(this.root)
    return sum;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    function dfs(node) {
      if(!node) return;
      if (node.val > lowerBound) {
        count++;
      }
      for(let child of node.children) {
        dfs(child)
      }
    }
    dfs(this.root)
    return count;
  }
}

module.exports = { Tree, TreeNode };
