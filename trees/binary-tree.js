/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    function calcMinDepth(node) {
      // if node is null, return 0
      if(!node) return 0;

      // if only one root node return 1 for current node
      if(!node.left && !node.right) return 1;

      // dive left and right
      const leftDepth = calcMinDepth(node.left);
      const rightDepth = calcMinDepth(node.right);

      // return the minimum depth + current node
      return Math.min(leftDepth, rightDepth) + 1;
    }
    // start calculation the min depth from root node
    return calcMinDepth(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function calcMaxDepth(node) {
      // if node is null, return 0
      if(!node) return 0;

      // if only one root node return 1 for current node
      if(!node.left && !node.right) return 1;

      // dive left and right
      const leftDepth = calcMaxDepth(node.left);
      const rightDepth = calcMaxDepth(node.right);

      // return the minimum depth + current node
      return Math.max(leftDepth, rightDepth) + 1;
    }
    // start calculation the min depth from root node
    return calcMaxDepth(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    //handle empty tree cases
    if (!this.root) return 0;
    let maxSum = Number.NEGATIVE_INFINITY;
    
    function calcSum(node) {
      if (!node) return 0;

      // calculate max sum of the left and right subtrees
      const leftSum = Math.max(0, calcSum(node.left));
      const rightSum = Math.max(0, calcSum(node.right));

      // adding the max sum for the current node 
      const nodeMaxSUm = node.val + leftSum + rightSum
      
      //update maxSum if the current node's sum is greater 
      maxSum = Math.max(maxSum, nodeMaxSUm);

      // return the max sum for the current subtree.
      return Math.max(leftSum, rightSum) + node.val
    }
    calcSum(this.root)
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let nextLargerVal= null;

    function findSmallestVal(node, currentSmallestVal) {
      if(!node) return currentSmallestVal;

      // compare current node and parameter && updating variable with current node's value if necessary
      if (node.val > lowerBound && 
            (nextLargerVal === null || node.val < nextLargerVal)) {
              nextLargerVal = node.val;
      }
      // dive left and right
      findSmallestVal(node.left)
      findSmallestVal(node.right)
    }
      // starting at the root node
      findSmallestVal(this.root)
      return nextLargerVal;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
