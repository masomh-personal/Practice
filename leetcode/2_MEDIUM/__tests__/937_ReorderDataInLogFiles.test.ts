import { reorderLogFiles } from '../937_ReorderDataInLogFiles';

describe('Leetcode #937: Reorder Data in Log Files', () => {
  describe('reorderLogFiles()', () => {
    it('should reorder logs with letter-logs before digit-logs and sort letter-logs by content then identifier', () => {
      const logs = [
        'dig1 8 1 5 1',
        'let1 art can',
        'dig2 3 6',
        'let2 own kit dig',
        'let3 art zero',
      ];
      const expected = [
        'let1 art can',
        'let3 art zero',
        'let2 own kit dig',
        'dig1 8 1 5 1',
        'dig2 3 6',
      ];
      const result = reorderLogFiles(logs);
      expect(result).toEqual(expected);
    });

    it('should keep the order of digit-logs unchanged when there are only digit-logs', () => {
      const logs = ['dig1 8 1 5 1', 'dig2 3 6', 'dig3 2 4 6'];
      const expected = ['dig1 8 1 5 1', 'dig2 3 6', 'dig3 2 4 6'];
      const result = reorderLogFiles(logs);
      expect(result).toEqual(expected);
    });

    it('should sort letter-logs correctly when contents are the same but identifiers are different', () => {
      const logs = ['let2 abc def', 'let1 abc def', 'let3 abc def'];
      const expected = ['let1 abc def', 'let2 abc def', 'let3 abc def'];
      const result = reorderLogFiles(logs);
      expect(result).toEqual(expected);
    });

    it('should handle an empty log list', () => {
      const logs: string[] = [];
      const expected: string[] = [];
      const result = reorderLogFiles(logs);
      expect(result).toEqual(expected);
    });

    it('should return letter-logs first when only one of each type exists', () => {
      const logs = ['let1 abc def', 'dig1 1 2 3 4'];
      const expected = ['let1 abc def', 'dig1 1 2 3 4'];
      const result = reorderLogFiles(logs);
      expect(result).toEqual(expected);
    });

    it('should handle a large number of mixed logs efficiently and correctly', () => {
      const letterLogs: string[] = [];
      const digitLogs: string[] = [];

      for (let i = 0; i < 50; i++) {
        letterLogs.push(`let${i} log entry number ${i}`);
        digitLogs.push(`dig${i} ${i} ${i + 1} ${i + 2}`);
      }

      const mixedLogs = [...digitLogs, ...letterLogs]; // Start with digit-logs followed by letter-logs
      const expectedLetterLogs = [...letterLogs].sort((a, b) => {
        const contentA = a.slice(a.indexOf(' ') + 1);
        const contentB = b.slice(b.indexOf(' ') + 1);
        return contentA.localeCompare(contentB);
      });

      const expected = [...expectedLetterLogs, ...digitLogs]; // Sorted letter-logs followed by original digit-logs
      const result = reorderLogFiles(mixedLogs);
      expect(result).toEqual(expected);
    });
  });
});
