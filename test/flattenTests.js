const assert = require('chai').assert;
const flatten = require('../lib/flatten');

describe('#flatten', () => {
  it('should return flattened version of nested array', () => {
    const array = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(array), [1, 2, 3, 4, 5, 6]);
  });

  it('should return an empty array if empty array is given', () => {
    const emptyArray = [];
    assert.strictEqual(flatten(emptyArray).length, 0);
  })
});
