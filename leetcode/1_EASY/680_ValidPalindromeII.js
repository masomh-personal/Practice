/**
 * Approach: Two Pointer with Recursive Helper Function
 * Time Complexity: O(n) - Each character is checked at most twice
 * Space Complexity: O(n) - Due to recursive call stack in worst case
 *
 * @param {string} s - Input string to check for near-palindrome
 * @return {boolean} - Returns true if the string can be a palindrome after at most one deletion
 */
export function validPalindrome(s) {
  // Edge Case: Single character is always a palindrome
  if (s.length <= 1) return true;

  /**
   * Helper Function: Checks if a substring is a palindrome
   * Uses two pointers to compare characters from both ends
   * Allows at most one character removal, tracked by 'alreadyRemoved' flag
   *
   * @param {number} left - Left pointer index
   * @param {number} right - Right pointer index
   * @param {boolean} alreadyRemoved - Tracks if one character has already been removed
   * @return {boolean} - Returns true if the substring is a palindrome with at most one removal
   */
  const isPalindrome = (left, right, alreadyRemoved = false) => {
    while (left < right) {
      // If mismatch is found, check both removal possibilities
      if (s[left] !== s[right]) {
        // If one character was already removed, return false
        if (alreadyRemoved) return false;

        // Recursively check both possibilities:
        // 1. Skip left character
        // 2. Skip right character
        return isPalindrome(left + 1, right, true) || isPalindrome(left, right - 1, true);
      }

      // Characters match, move pointers inward
      left++;
      right--;
    }
    // All characters matched, it's a palindrome
    return true;
  };

  // Initial call to helper function with full string range
  return isPalindrome(0, s.length - 1);
}
