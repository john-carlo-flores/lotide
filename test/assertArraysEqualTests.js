const assert = require('chai').assert;
const assertArraysEqual = require('../assert/assertArraysEqual');

describe('#assertArraysEqual', function() {
  it('should return true for the arrays [[2, 3],[4]], [[2, 3],[4]]', function() {
    assert.include(assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]), '✅');
  });

  it('should return false for the arrays [[2, 3],[4]], [[2, 3],4]', function() {
    assert.include(assertArraysEqual([[2, 3], [4]], [[2, 3], 4]), '🛑');
  });
});