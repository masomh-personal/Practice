/**
 * A well-formed Binary Search Tree (BST) implementation for general-purpose use.
 * Supports insertion, traversal, and duplicate handling (duplicates go to the left subtree).
 */
class BSTNode {
  /**
   * Represents a node in the Binary Search Tree.
   * @param {number} value - The value stored in the node.
   * @param {BSTNode|null} left - Reference to the left child (defaults to null).
   * @param {BSTNode|null} right - Reference to the right child (defaults to null).
   */
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class BST {
  /**
   * Initializes an empty Binary Search Tree or one with a root value.
   * @param {number|null} rootValue - The value for the root node (optional).
   */
  constructor(rootValue = null) {
    this.root = rootValue !== null ? new BSTNode(rootValue) : null;
  }

  /**
   * Inserts a new value into the BST, maintaining its structure.
   * Duplicates are allowed and placed in the left subtree.
   * @param {number} value - The value to insert into the tree.
   */
  insert(value) {
    if (!this.root) {
      this.root = new BSTNode(value);
      return;
    }

    let current = this.root;

    while (current) {
      if (value <= current.value) {
        // Insert in the left subtree
        if (!current.left) {
          current.left = new BSTNode(value);
          return;
        }
        current = current.left;
      } else {
        // Insert in the right subtree
        if (!current.right) {
          current.right = new BSTNode(value);
          return;
        }
        current = current.right;
      }
    }
  }

  /**
   * Performs an in-order traversal (left -> root -> right) and applies a callback to each node's value.
   * @param {function} callback - The function to execute on each node's value.
   */
  inOrderTraversal(callback) {
    const dfsInOrder = (node) => {
      if (!node) return;
      dfsInOrder(node.left); // Traverse left subtree
      callback(node.value); // Process current node
      dfsInOrder(node.right); // Traverse right subtree
    };

    dfsInOrder(this.root);
  }

  /**
   * Performs a pre-order traversal (root -> left -> right) and applies a callback to each node's value.
   * @param {function} callback - The function to execute on each node's value.
   */
  preOrderTraversal(callback) {
    const dfsPreOrder = (node) => {
      if (!node) return;
      callback(node.value); // Process current node
      dfsPreOrder(node.left); // Traverse left subtree
      dfsPreOrder(node.right); // Traverse right subtree
    };

    dfsPreOrder(this.root);
  }

  /**
   * Performs a post-order traversal (left -> right -> root) and applies a callback to each node's value.
   * @param {function} callback - The function to execute on each node's value.
   */
  postOrderTraversal(callback) {
    const dfsPostOrder = (node) => {
      if (!node) return;
      dfsPostOrder(node.left); // Traverse left subtree
      dfsPostOrder(node.right); // Traverse right subtree
      callback(node.value); // Process current node
    };

    dfsPostOrder(this.root);
  }

  /**
   * Performs an in-order traversal iteratively (left -> root -> right).
   * @param {function} callback - The function to execute on each node's value.
   */
  inOrderTraversalIterative(callback) {
    const stack = [];
    let current = this.root;

    while (stack.length > 0 || current !== null) {
      // Traverse to the leftmost node
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }

      // Process the node on top of the stack
      current = stack.pop();
      callback(current.value);

      // Move to the right subtree
      current = current.right;
    }
  }

  /**
   * Searches for a value in the BST.
   * @param {number} value - The value to search for.
   * @returns {boolean} - True if the value exists in the tree, otherwise false.
   */
  contains(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      }

      current = value < current.value ? current.left : current.right;
    }

    return false;
  }

  /**
   * Retrieves the minimum value in the BST.
   * @returns {number|null} - The smallest value in the tree, or null if the tree is empty.
   */
  findMin() {
    if (!this.root) return null;

    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  /**
   * Retrieves the maximum value in the BST.
   * @returns {number|null} - The largest value in the tree, or null if the tree is empty.
   */
  findMax() {
    if (!this.root) return null;

    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }
}
