/**
 * Finds the exact date of a specified weekday occurrence in a given month and year.
 *
 * @param {number} year - The year of the meetup (e.g., 2023).
 * @param {number} month - The month of the meetup (1-12, not zero-based like JS Dates).
 * @param {string} descriptor - The occurrence of the weekday (e.g., 'teenth', 'first', 'second', 'third', 'fourth', 'last').
 * @param {string} weekday - The target weekday (e.g., 'Monday', 'Tuesday').
 * @returns {Date} The exact date of the meetup.
 * @throws {Error} If an invalid descriptor or weekday is provided.
 */
export const meetup = (year, month, descriptor, weekday) => {
  // Mapping from weekday index (0-6) to weekday name
  const weekdayIndexToName = new Map([
    [0, 'Sunday'],
    [1, 'Monday'],
    [2, 'Tuesday'],
    [3, 'Wednesday'],
    [4, 'Thursday'],
    [5, 'Friday'],
    [6, 'Saturday'],
  ]);

  // Inverse mapping from weekday name to index (0-6)
  const weekdayNameToIndex = new Map(
    Array.from(weekdayIndexToName, ([index, name]) => [name, index])
  );

  // Convert provided weekday to its numeric index (0 = Sunday, 6 = Saturday)
  const TARGET_DAY_IDX = weekdayNameToIndex.get(weekday);

  // Validate input to prevent invalid descriptors or weekdays
  if (!TARGET_DAY_IDX && TARGET_DAY_IDX !== 0) {
    throw new Error(`Invalid weekday: ${weekday}`);
  }

  const validDescriptors = ['teenth', 'first', 'second', 'third', 'fourth', 'last'];
  if (!validDescriptors.includes(descriptor)) {
    throw new Error(`Invalid descriptor: ${descriptor}`);
  }

  // Helper function to find the first occurrence of the target weekday in "teenth" range (13th - 19th)
  const getTeenthDay = () => {
    const date = new Date(year, month - 1, 13); // Start at 13th
    while (date.getDay() !== TARGET_DAY_IDX) {
      date.setDate(date.getDate() + 1); // Increment until matching the target weekday
    }
    return date;
  };

  // Helper function to find the last occurrence of the target weekday in the given month
  const getLastDay = () => {
    const date = new Date(year, month, 0); // Get last day of the month
    while (date.getDay() !== TARGET_DAY_IDX) {
      date.setDate(date.getDate() - 1); // Move backward until matching the target weekday
    }
    return date;
  };

  // Helper function to find the nth occurrence (1st, 2nd, 3rd, 4th) of the target weekday
  const getNthDay = (nth) => {
    const date = new Date(year, month - 1, 1); // Start at the first day of the month
    let counter = 0;

    while (true) {
      if (date.getDay() === TARGET_DAY_IDX) {
        counter++; // Increase count when we hit the target weekday
        if (counter === nth) break; // Exit once we reach the desired occurrence
      }
      date.setDate(date.getDate() + 1); // Move to the next day
    }

    return date;
  };

  // Mapping of descriptors to corresponding functions
  const descriptorFnMap = {
    teenth: getTeenthDay,
    first: () => getNthDay(1),
    second: () => getNthDay(2),
    third: () => getNthDay(3),
    fourth: () => getNthDay(4),
    last: getLastDay,
  };

  // Execute and return the correct function based on the descriptor
  return descriptorFnMap[descriptor]();
};
