import { canAttendMeetings } from '../252_MeeetingRooms.js';

// Leetcode #252: Meeting Rooms
// Input: [[0, 30], [5, 10], [15, 20]]  --> Output: false (meetings overlap)
// Input: [[7, 10], [2, 4]]             --> Output: true (no overlaps)

describe('Leetcode #252: Meeting Rooms', () => {
  it('should return false for overlapping intervals', () => {
    const intervals = [
      [0, 30],
      [5, 10],
      [15, 20],
    ];
    const result = canAttendMeetings(intervals);
    const expected = false;
    expect(result).toBe(expected);
  });

  it('should return true for non-overlapping intervals', () => {
    const intervals = [
      [7, 10],
      [2, 4],
    ];
    const result = canAttendMeetings(intervals);
    const expected = true;
    expect(result).toBe(expected);
  });

  it('should return true for a single meeting', () => {
    const intervals = [[0, 5]];
    const result = canAttendMeetings(intervals);
    const expected = true;
    expect(result).toBe(expected);
  });

  it('should return true for no meetings (empty input)', () => {
    const intervals = [];
    const result = canAttendMeetings(intervals);
    const expected = true;
    expect(result).toBe(expected);
  });

  it('should return false for meetings with the same start time', () => {
    const intervals = [
      [1, 5],
      [1, 6],
    ];
    const result = canAttendMeetings(intervals);
    const expected = false;
    expect(result).toBe(expected);
  });

  it('should handle intervals with large values', () => {
    const intervals = [
      [1_000_000, 2_000_000],
      [2_000_001, 3_000_000],
    ];
    const result = canAttendMeetings(intervals);
    const expected = true;
    expect(result).toBe(expected);
  });

  it('should return false for intervals with overlapping large values', () => {
    const intervals = [
      [1_000_000, 2_000_000],
      [1_500_000, 2_500_000],
    ];
    const result = canAttendMeetings(intervals);
    const expected = false;
    expect(result).toBe(expected);
  });
});
