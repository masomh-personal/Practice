/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 *
 * Time Complexity: O(m * n)
 * - We iterate through each character of text1 and text2, filling in a 2D DP table.
 * - The nested loops each run for m and n iterations respectively, resulting in O(m * n) time complexity,
 *   where m is the length of text1 and n is the length of text2.
 *
 * Space Complexity: O(m * n)
 * - We create a 2D DP array of size (m + 1) x (n + 1), where m is the length of text1 and n is the length of text2.
 * - This results in O(m * n) space complexity for storing the DP table.
 */
const longestCommonSubsequence = (text1, text2) => {
  // If the two strings are identical, the LCS is the length of either string
  if (text1 === text2) return text1.length;

  const rows = text1.length;
  const cols = text2.length;

  // Create a 2D array (dp table) initialized with all zeroes
  // Adding 1 to the row/col lengths simplifies handling of boundary cases
  // (avoiding the need to check for out-of-bounds indices)
  const dp = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

  // Populate the dp table by iterating through each character of text1 and text2
  // NOTE: We start from index 1 because index 0 is the added dummy row/column
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      // If the characters match, the LCS includes this character
      // Add 1 to the value from the diagonal (dp[i-1][j-1]) which represents the LCS up to the previous characters
      if (text1.at(i - 1) === text2.at(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // If the characters do not match, take the maximum LCS possible from either
        // the left cell (dp[i][j-1]) or the cell above (dp[i-1][j])
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The final result (length of the LCS) is in the bottom-right cell of the dp table
  // dp[rows][cols] gives the LCS length for the full text1 and text2
  return dp[rows][cols];
};

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 *
 * Time Complexity: O(m * n)
 * - Each subproblem is solved once and stored in the memoization table.
 * - The overall time complexity is O(m * n), where m is the length of text1 and n is the length of text2.
 *
 * Space Complexity: O(m * n)
 * - The space complexity is O(m * n) due to the memoization table storing the results of subproblems.
 * - Additionally, the recursion stack can go as deep as O(m + n) in the worst case, but the dominant factor is the memoization table.
 */
const longestCommonSubsequenceRecursive = (text1, text2) => {
  const memo = Array.from({ length: text1.length }, () => Array(text2.length).fill(-1));

  const lcsRecursive = (i, j) => {
    // Base case: If either string is exhausted, no common subsequence
    if (i < 0 || j < 0) return 0;

    // If already computed, return the cached value
    if (memo[i][j] !== -1) return memo[i][j];

    // If characters match, the LCS includes this character
    if (text1[i] === text2[j]) {
      memo[i][j] = 1 + lcsRecursive(i - 1, j - 1);
    } else {
      // If they don't match, the LCS is the maximum of excluding one character from either string
      memo[i][j] = Math.max(lcsRecursive(i - 1, j), lcsRecursive(i, j - 1));
    }

    return memo[i][j];
  };

  // Start the recursion from the last indices of both strings
  return lcsRecursive(text1.length - 1, text2.length - 1);
};

export { longestCommonSubsequence, longestCommonSubsequenceRecursive };
