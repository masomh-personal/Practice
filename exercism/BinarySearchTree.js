class BSTNode {
  /**
   * Represents a node in the Binary Search Tree.
   * @param {number} data - The value stored in the node.
   * @param {BSTNode|null} left - Reference to the left child (defaults to null).
   * @param {BSTNode|null} right - Reference to the right child (defaults to null).
   */
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class BinarySearchTree {
  /**
   * Initializes the Binary Search Tree (BST).
   * If a root value is provided, creates a root node; otherwise, starts with an empty tree.
   * @param {number|null} rootVal - The value for the root node (optional).
   */
  constructor(rootVal = null) {
    this.root = rootVal !== null ? new BSTNode(rootVal) : null; // Set the root if a value is provided
  }

  /**
   * Retrieves the value of the root node.
   * @returns {number|null} - The value of the root node, or null if the tree is empty.
   */
  get data() {
    return this.root ? this.root.data : null;
  }

  /**
   * Retrieves the right subtree of the root.
   * @returns {BSTNode|null} - Reference to the right child of the root, or null if none exists.
   */
  get right() {
    return this.root ? this.root.right : null;
  }

  /**
   * Retrieves the left subtree of the root.
   * @returns {BSTNode|null} - Reference to the left child of the root, or null if none exists.
   */
  get left() {
    return this.root ? this.root.left : null;
  }

  /**
   * Inserts a new value into the BST, maintaining the BST property.
   * @param {number} newVal - The value to insert into the tree.
   */
  insert(newVal) {
    if (!this.root) {
      // Initialize the root if the tree is empty
      this.root = new BSTNode(newVal);
      return;
    }

    let currNode = this.root;

    while (currNode) {
      // NOTE: this implementation is allowing duplicates
      if (newVal <= currNode.data) {
        // Traverse the left subtree
        if (!currNode.left) {
          currNode.left = new BSTNode(newVal); // Insert as left child
          return;
        }
        currNode = currNode.left; // Move to the left child
      } else {
        // Traverse the right subtree
        if (!currNode.right) {
          currNode.right = new BSTNode(newVal); // Insert as right child
          return;
        }
        currNode = currNode.right; // Move to the right child
      }
    }
  }

  /**
   * Performs in-order traversal (left -> root -> right) and applies a callback to each node's data.
   * @param {function} cb - The callback function to execute for each node.
   * @throws {Error} If the callback is not a function.
   */
  each(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Callback must be a function');
    }

    const dfs = (node) => {
      if (!node) return; // Base case: null node

      dfs(node.left); // Traverse the left subtree
      cb(node.data); // Process the current node (root)
      dfs(node.right); // Traverse the right subtree
    };

    dfs(this.root); // Start traversal from the root
  }
}
