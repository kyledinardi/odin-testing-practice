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

function caesarCipher(str, shiftFactor) {
  let cipher = '';
  const upperCased = str.toUpperCase();

  for (let i = 0; i < upperCased.length; i += 1) {
    const charCode = upperCased.charCodeAt(i);

    if (charCode <= 90 && charCode >= 65) {
      const newCharCode = ((charCode - 65 + shiftFactor) % 26) + 65;
      cipher = `${cipher}${String.fromCharCode(newCharCode)}`;
    } else {
      cipher = `${cipher}${upperCased.charAt(i)}`;
    }
  }

  return cipher;
}

function analyzeArray(arr) {}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
