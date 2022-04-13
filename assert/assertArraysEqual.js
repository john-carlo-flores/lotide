const eqArrays = require('../lib/eqArrays');

const assertArraysEqual = function(array1, array2) {
  let message = `✅ Assertion Passed: ${array1} === ${array2}`

  if (!eqArrays(array1, array2)) {
    message = `🛑 Assertion Failed: ${array1} !== ${array2}`;
  }

  console.log(message);
  return message;
};

module.exports = assertArraysEqual;