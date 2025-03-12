/**
 * Counts the number of employees who met or exceeded the target hours.
 *
 * Time Complexity: O(n) - Iterates through all elements in `hours`
 * Space Complexity: O(1) - Uses a single accumulator
 *
 * @param hours - Array of hours worked by employees
 * @param target - Minimum required hours to meet the target
 * @returns Number of employees meeting the target
 */
export function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  return hours.reduce((acc, num) => acc + (num >= target ? 1 : 0), 0);
}
