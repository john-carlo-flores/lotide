const eqArrays = require('../lib/eqArrays');
const eqObjects = require('../lib/eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let message = `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;

  if (!eqObjects(actual, expected)) {
    message = `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  
  console.log(message);
  return message;
};

module.exports = assertObjectsEqual;