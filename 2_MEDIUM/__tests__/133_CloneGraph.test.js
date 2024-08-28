import { cloneGraph, _Node } from '../133_CloneGraph.js';

// Utility function to compare two graphs
const areGraphsEqual = (node1, node2) => {
  const visited = new Map();

  const dfs = (n1, n2) => {
    if (!n1 && !n2) return true;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    if (visited.has(n1)) return visited.get(n1) === n2;

    visited.set(n1, n2);

    if (n1.neighbors.length !== n2.neighbors.length) return false;

    for (let i = 0; i < n1.neighbors.length; i++) {
      if (!dfs(n1.neighbors[i], n2.neighbors[i])) return false;
    }

    return true;
  };

  return dfs(node1, node2);
};

describe('LeetCode 133: Clone Graph', () => {
  it('Test Case 1: Single node graph', () => {
    const node1 = new _Node(1);
    expect(areGraphsEqual(cloneGraph(node1), node1)).toBe(true);
  });

  it('Test Case 2: Simple graph with two connected nodes', () => {
    const node1 = new _Node(1);
    const node2 = new _Node(2);
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);
    const clonedGraph = cloneGraph(node1);
    expect(areGraphsEqual(clonedGraph, node1)).toBe(true);
  });

  it('Test Case 3: Simple triangle graph', () => {
    const node1 = new _Node(1);
    const node2 = new _Node(2);
    const node3 = new _Node(3);
    node1.neighbors.push(node2, node3);
    node2.neighbors.push(node1, node3);
    node3.neighbors.push(node1, node2);
    const clonedGraph = cloneGraph(node1);
    expect(areGraphsEqual(clonedGraph, node1)).toBe(true);
  });

  it('Test Case 4: Empty graph (null node)', () => {
    expect(cloneGraph(null)).toBeNull();
  });

  it('Test Case 5: Disconnected graph (four nodes, two separate pairs)', () => {
    const node1 = new _Node(1);
    const node2 = new _Node(2);
    const node3 = new _Node(3);
    const node4 = new _Node(4);
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);
    node3.neighbors.push(node4);
    node4.neighbors.push(node3);
    const clonedGraph = cloneGraph(node1);
    expect(areGraphsEqual(clonedGraph, node1)).toBe(true);
  });

  it('Test Case 6: Large graph with a complex structure', () => {
    const node1 = new _Node(1);
    const node2 = new _Node(2);
    const node3 = new _Node(3);
    const node4 = new _Node(4);
    const node5 = new _Node(5);
    node1.neighbors.push(node2, node3);
    node2.neighbors.push(node1, node4);
    node3.neighbors.push(node1, node5);
    node4.neighbors.push(node2, node5);
    node5.neighbors.push(node3, node4);
    const clonedGraph = cloneGraph(node1);
    expect(areGraphsEqual(clonedGraph, node1)).toBe(true);
  });
});
