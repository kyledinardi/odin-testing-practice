function capitalize(str) {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
}

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed = `${reversed}${str[i]}`;
  }

  return reversed;
}

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(str, shiftFactor) {}

function analyzeArray(arr) {}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
