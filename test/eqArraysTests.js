const assert = require('chai').assert;
const eqArrays = require('../lib/eqArrays');

describe('#eqArrays', function() {
  it('should return true for the arrays [[2, 3],[4]], [[2, 3],[4]]', function() {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it('should return false for the arrays [[2, 3],[4]], [[2, 3],4]', function() {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
});
