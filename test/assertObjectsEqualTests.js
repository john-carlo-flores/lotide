const assert = require('chai').assert;
const assertObjectsEqual = require('../assert/assertObjectsEqual');

describe('#assertObjectsEqual', () => {
  it('should pass assertion for objects with the same key-value pairs (even if not declared in the same order)', () => {
    //TEST CODE
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.include(assertObjectsEqual(ab, ba), '✅');
  });

  it ('should fail assertion for objects where one has one extra key-value pair even if the rest is matching', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.include(assertObjectsEqual(ab, abc), '🛑');
  });

  it('should pass assertion for objects with the same key-value pairs (even if they are values are nested arrays)', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.include(assertObjectsEqual(cd, dc), '✅');
  });

  it('should fail assertion for objects where one has one extra element inside the nested array value', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.include(assertObjectsEqual(cd, cd2), '🛑');
  });
});