import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './testables';

test('capitalize() capitalizes', () => {
  expect(capitalize('capitalize')).toMatch(/Capitalize/);
});
