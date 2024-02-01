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

test('reverseString() reverses', () => {
  expect(reverseString('reverse')).toMatch(/esrever/);
});

test('calculator.add() adds', () => {
  expect(calculator.add(6, 2)).toBe(8);
});

test('calculator.subtract() subtracts', () => {
  expect(calculator.subtract(6, 2)).toBe(4);
});

test('calculator.divide() divides', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('calculator.multiply() multiplies', () => {
  expect(calculator.multiply(6, 2)).toBe(12);
});