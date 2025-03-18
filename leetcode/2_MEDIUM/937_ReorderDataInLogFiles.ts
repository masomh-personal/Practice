/**
 * Reorders log files such that all letter-logs come before digit-logs.
 * Letter-logs are sorted lexicographically by content, then identifier.
 * Digit-logs retain their original relative order.
 *
 * @param logs - An array of log strings, each with an identifier and log content.
 * @returns A reordered array of log strings with letter-logs first, sorted by rules.
 *
 * @timecomplexity O(N log N) — Sorting letter-logs dominates, with N being the number of logs.
 * @spacecomplexity O(N) — Additional arrays to separate letter-logs and digit-logs.
 */
export function reorderLogFiles(logs: string[]): string[] {
  const letterLogs: string[] = [];
  const digitLogs: string[] = [];

  // Helper: Extract log content (everything after first space)
  const getLogContent = (log: string): string => log.substring(log.indexOf(' ') + 1);

  // Helper: Extract log identifier (everything before first space)
  const getLogIdentifier = (log: string): string => log.substring(0, log.indexOf(' '));

  // Helper: Determine if log is a digit-log by inspecting first char after space
  const isDigitLog = (log: string): boolean => {
    const firstChar = log.charAt(log.indexOf(' ') + 1);
    // Digits remain the same for toLowerCase and toUpperCase, unlike letters
    return firstChar.toLowerCase() === firstChar.toUpperCase();
  };

  // Partition logs into letter-logs and digit-logs
  for (const log of logs) {
    if (isDigitLog(log)) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  }

  // Sort letter-logs by content first, then identifier as tie-breaker
  letterLogs.sort((logA, logB) => {
    const contentA = getLogContent(logA);
    const contentB = getLogContent(logB);

    if (contentA !== contentB) {
      return contentA.localeCompare(contentB);
    }

    const idA = getLogIdentifier(logA);
    const idB = getLogIdentifier(logB);
    return idA.localeCompare(idB);
  });

  // Return reordered logs: letter-logs followed by original-order digit-logs
  return [...letterLogs, ...digitLogs];
}
