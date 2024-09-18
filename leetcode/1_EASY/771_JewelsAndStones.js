/**
 * This function calculates the number of jewels found in a collection of stones.
 * A "jewel" is defined as any character in the `jewels` string, and the `stones` string
 * represents the collection of stones you have. Each character in stones is a type of stone.
 * The goal is to count how many stones are jewels.
 *
 * Time complexity: O(n) - We iterate over the stones string once.
 * Space complexity: O(n) - We store the jewels in a Set, and the space depends on the size of `jewels`.
 *
 * @param {string} jewels - A string where each character represents a type of jewel.
 * @param {string} stones - A string where each character represents a type of stone you own.
 * @return {number} The number of stones that are jewels.
 */
export const numJewelsInStones = (jewels, stones) => {
  // Convert the `jewels` string into a Set for fast lookups.
  // Sets allow O(1) time complexity for checking if an element is present.
  const jewelSet = new Set(jewels);

  // Initialize a counter to keep track of how many stones are jewels.
  let count = 0;

  // Iterate over each stone in the `stones` string.
  for (const stone of stones) {
    // If the stone is present in the `jewelSet`, it means it's a jewel, so increment the count.
    count += jewelSet.has(stone) ? 1 : 0;
  }

  // Return the total count of jewels found in the stones.
  return count;
};
