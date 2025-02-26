/**
 * Time: O(n) - iterate over each row (nested array, 1 level)
 * Space: O(1) - no additional data structures, just tracking variables
 * @param {number[][]} matrix
 * @returns {number}
 */
export function diagonalDifference(matrix) {
  // example: [[1,2,3],[4,5,6], [9,8,9]]
  let leftToRightDiag = 0;
  let rightToLeftDiag = 0;
  const MATRIX_LENGTH = matrix.length;

  // pointers: left/right
  let left = 0;
  let right = MATRIX_LENGTH - 1;

  // for each row of matrix
  for (const currRow of matrix) {
    const currLeftNum = currRow[left];
    const currRightNum = currRow[right];

    leftToRightDiag += currLeftNum;
    rightToLeftDiag += currRightNum;

    // update left/right pointers
    left++;
    right--;
  }

  return Math.abs(leftToRightDiag - rightToLeftDiag);
}
