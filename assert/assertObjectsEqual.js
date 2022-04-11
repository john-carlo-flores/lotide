const eqArrays = require('../lib/eqArrays');
const eqObjects = require('../lib/eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
    
  return console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);