const assert = require('chai').assert;
const without = require('../lib/without');

describe('#without', () => {
  it('should return array with remaining elements not matching what is given as itemsToRemove', () => {
    const array = [1, 2, 3];
    assert.deepEqual(without(array, [1]), [2, 3]);
  });

  it('should return array with remaining elements not matching what is given as itemsToRemove', () => {
    const array = ["1", "2", "3"];
    assert.deepEqual(without(array, [1, 2, "3"]), ["1", "2"]);
  });

  it('should not alter the original array when array is passed in without function', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

  it('should return empty array if empty array is given', () => {
    const emptyArray = [];
    assert.strictEqual(without(emptyArray).length, 0);
  });
});

