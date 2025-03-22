type IndexTemp = {
  index: number;
  temperature: number;
};

/**
 * Solves the daily temperatures problem using a Monotonic Stack.
 * Each index is processed once for an efficient O(n) solution.
 *
 * Time: O(n) – each index pushed/popped at most once.
 * Space: O(n) – output array + stack of indices.
 *
 * @param {number[]} temperatures - List of daily temperatures.
 * @returns {number[]} Days to wait for a warmer temperature per day.
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer: number[] = Array(n).fill(0);

  const stack: IndexTemp[] = [];

  for (let i = 0; i < n; i++) {
    const currTemp = temperatures[i];

    while (stack.length && currTemp > stack.at(-1)!.temperature) {
      const { index: prevIndex } = stack.pop()!;
      answer[prevIndex] = i - prevIndex;
    }

    stack.push({ index: i, temperature: currTemp });
  }

  return answer;
}

/**
 * Approach: Brute Force (NAIVE)
 * Time: O(n^2) - nested loop comparing each day with all future days
 * Space: O(n) - output array of same size as input
 *
 * @param {number[]} temperatures - List of daily temperatures
 * @returns {number[]} - Number of days until a warmer temperature for each day
 */
export function dailyTemperaturesNaive(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer: number[] = Array(n).fill(0);

  for (let i = 0; i < n - 1; i++) {
    const currTemp = temperatures[i];

    for (let j = i + 1; j < n; j++) {
      if (temperatures[j] > currTemp) {
        answer[i] = j - i;
        break; // stop once the first warmer day is found
      }
    }
  }

  return answer;
}
