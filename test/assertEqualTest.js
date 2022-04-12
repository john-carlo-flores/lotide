const assertEqual = require('../assert/assertEqual');
const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('should assert fail when actual !== expected', () => {
    assert.include(assertEqual("Lighthouse Labs", "Bootcamp"), '🛑');
  });

  it('should assert pass when actual === expected', () => {
    assert.include(assertEqual(1, 1), '✅');
  });
});