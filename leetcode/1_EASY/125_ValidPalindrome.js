/**
 * Checks if a string is a palindrome, ignoring non-alphanumeric characters and case.
 *
 * Time Complexity: O(n) - We process each character at most once.
 * Space Complexity: O(1) - We use constant extra space regardless of input size.
 *
 * @param {string} s - The input string to check.
 * @return {boolean} - Returns true if the string is a palindrome; otherwise, false.
 */
export function isPalindrome(s) {
  // Validate input is a string
  if (typeof s !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Define regex pattern once for reuse
  const alphanumericPattern = /[a-zA-Z0-9]/;

  // Use two pointers to compare characters from both ends
  let left = 0;
  let right = s.length - 1;

  // Check in one pass without normalizing first
  while (left < right) {
    // Skip non-alphanumeric characters from left side
    if (!alphanumericPattern.test(s[left])) {
      left++;
      continue;
    }

    // Skip non-alphanumeric characters from right side
    if (!alphanumericPattern.test(s[right])) {
      right--;
      continue;
    }

    // Compare characters (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
