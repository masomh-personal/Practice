/**
 * Time: O(1) - Constant time checks, no loops or iterations
 * Space: O(1) - No additional data structures used
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export const score = (x, y) => {
  const SCORES = {
    outer: 1,
    middle: 5,
    inner: 10,
    default: 0,
  };

  // Pythagorean theorem applied to a coordinate plane: r = √((x - h)² + (y - k)²);
  // (h, k) represent point that is the center of the circle which is (0, 0) in this case
  const h = 0;
  const k = 0;
  const distanceFromCenter = Math.sqrt((x - h) ** 2 + (y - k) ** 2);

  // Bullseye
  if (distanceFromCenter <= 1) {
    return SCORES.inner;
  }

  // Inside or exactly on the middle circle
  if (distanceFromCenter <= 5) {
    return SCORES.middle;
  }

  // Inside or exactly on the outer circle
  if (distanceFromCenter <= 10) {
    return SCORES.outer;
  }

  // Complete miss!
  return SCORES.default;
};
