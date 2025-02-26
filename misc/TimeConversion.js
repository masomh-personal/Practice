/**
 * Converts a 12-hour time format (hh:mm:ssAM or hh:mm:ssPM) to a 24-hour time format.
 *
 * Time Complexity: O(1) - Constant time operations for slicing and splitting.
 * Space Complexity: O(1) - Uses a fixed number of variables.
 *
 * @param {string} s - Time string in 12-hour format (e.g., "07:05:45PM").
 * @return {string} - Time string in 24-hour format (e.g., "19:05:45").
 */
export function timeConversion(s) {
  // Extract AM or PM part
  const controllerM = s.slice(8);

  // Split the time into hours, minutes, and seconds
  let [hh, mm, ss] = s.slice(0, 8).split(':');

  // Special case: If the hour is '12'
  if (hh === '12') {
    // '12' AM should convert to '00' (midnight)
    hh = controllerM === 'AM' ? '00' : '12';
  }
  // For PM times (except '12'), add 12 to the hour to convert to 24-hour format
  else if (controllerM === 'PM') {
    hh = String(+hh + 12).padStart(2, '0');
  }

  // Join the converted time components and return as a string
  return [hh, mm, ss].join(':');
}
