/**
 * Time: O(n) - Each asteroid is processed at most once.
 * Space: O(n) - The stack stores the surviving asteroids.
 * @param {number[]} asteroids - Array of asteroids represented by integers.
 * @return {number[]} - Resulting array of asteroids after all collisions.
 */
export const asteroidCollision = (asteroids) => {
  const resultAsteroidStack = []; // Stack to store surviving asteroids

  for (const incomingAsteroid of asteroids) {
    let shouldAdd = true; // Flag to determine if the incoming asteroid should be added to the stack

    // While there is potential for a collision:
    // We check if the last asteroid in the stack is moving right (positive)
    // and the incoming asteroid is moving left (negative). Only in this case is there a potential collision.
    while (
      resultAsteroidStack.length &&
      resultAsteroidStack.at(-1) > 0 && // Last asteroid is moving right
      incomingAsteroid < 0 // Incoming asteroid is moving left
    ) {
      const lastAsteroidOnStack = resultAsteroidStack.at(-1);
      const incomingMass = Math.abs(incomingAsteroid);
      const lastAsteroidMass = Math.abs(lastAsteroidOnStack);

      // Case 1: Both asteroids have the same mass, both are destroyed
      if (incomingMass === lastAsteroidMass) {
        resultAsteroidStack.pop(); // Remove the last asteroid from the stack
        shouldAdd = false; // Both asteroids are destroyed, so the incoming one should not be added
        break; // No further collisions to check
      }

      // Case 2: The last asteroid is larger, so the incoming asteroid is destroyed
      if (lastAsteroidMass > incomingMass) {
        shouldAdd = false; // Incoming asteroid is destroyed
        break; // No further collisions to check
      }

      // Case 3: The incoming asteroid is larger, so the last asteroid is destroyed
      resultAsteroidStack.pop(); // Remove the smaller asteroid from the stack and continue checking for more collisions
    }

    // If the asteroid survives (no collision, or it survived after collisions), add it to the stack
    if (shouldAdd) {
      resultAsteroidStack.push(incomingAsteroid);
    }
  }

  return resultAsteroidStack; // Return the final state of the asteroids
};
