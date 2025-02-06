/**
 * TIME: O(n) - We iterate through both strings once
 * SPACE: O(1) - We store at most 2 indices
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
export function areAlmostEqual(s1, s2) {
  // If strings are already identical, no swap is needed
  if (s1 === s2) return true;

  const differing = []; // Tracks indices where s1 and s2 differ

  // Identify differing indices
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      differing.push(i);
      // More than 2 mismatches means we can't fix it with a single swap
      if (differing.length > 2) return false;
    }
  }

  // A valid swap requires exactly two differences
  if (differing.length !== 2) return false;

  const [i, j] = differing;
  return s1[i] === s2[j] && s1[j] === s2[i];
}
