/**
 * 133. Clone Graph [MEDIUM]
 * V = # Vertices
 * E = # Edges
 * Time: O(V + E) | BFS ensures we visit each vertex and edge exactly once
 * Space: O(V) | Extra space needed for the queue and visitedMap
 */

// ES6 Class: LeetCode _Node
class _Node {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

/**
 * @param {_Node} node
 * @return {_Node}
 */
const cloneGraph = (node) => {
  // Handle edge case where the input graph is empty
  if (!node) return node;

  // Initialize visited map with the first node and its clone
  const visitedMap = new Map([[node, new _Node(node.val)]]);
  const queue = [node]; // Initialize BFS queue with the starting node

  // Perform BFS traversal to clone the graph
  while (queue.length) {
    const currNode = queue.shift(); // Get the next node from the queue

    // Iterate over each neighbor of the current node
    for (const neighbor of currNode.neighbors) {
      // If the neighbor hasn't been cloned yet, clone and enqueue it
      if (!visitedMap.has(neighbor)) {
        visitedMap.set(neighbor, new _Node(neighbor.val));
        queue.push(neighbor);
      }

      // Link the current node's clone to its neighbor's clone
      visitedMap.get(currNode).neighbors.push(visitedMap.get(neighbor));
    }
  }

  // Return the cloned graph starting from the original entry node
  return visitedMap.get(node);
};
