export class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

/**
 * Approach: BFS using QUEUE (iterative)
 * Time Complexity: O(n) - processes each node once
 * Space Complexity: O(n) - stores all node values in the result array
 *
 * @param root - Root of the binary tree
 * @returns Level order traversal as an array of arrays
 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const queue: TreeNode[] = [root];
  const result: number[][] = [];

  while (queue.length) {
    const currLevelLength = queue.length;
    const level: number[] = [];

    for (let i = 0; i < currLevelLength; i++) {
      const currNode = queue.shift()!; // "!" tells TypeScript that this will never be undefined

      level.push(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }

    result.push(level);
  }

  return result;
}
