import { isPalindrome } from '../utils';

test('is case-insensitive', () => {
  expect(isPalindrome('RaceCar')).toBe(true);
});

test('returns false for an empty string', () => {
  expect(isPalindrome('')).toBe(false);
});

test('throws error for words with non-alphabetic characters', () => {
  expect(() => isPalindrome('race-car')).toThrow("Only alphabetic characters are allowed");
});

test('throws error for non-string input', () => {
  expect(() => isPalindrome(12321)).toThrow("Input must be a string");
});
