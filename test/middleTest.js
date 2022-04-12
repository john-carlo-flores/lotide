const assertArraysEqual = require('chai').assert;
const { assert } = require('chai');
const middle = require('../lib/middle');

describe('#middle', () => {
  it('should return empty array when array given is empty', () => {
    const emptyArray = [];
    assert.strictEqual(middle(emptyArray).length, 0)
  });
  
  it('should return empty array when array given has one element', () => {
    const array = [1];
    assert.strictEqual(middle(array).length, 0);
  });
  
  it('should return empty array when array given has two elements', () => {
    const array = [1, 2];
    assert.strictEqual(middle(array).length, 0);
  });

  it('should return array with 2 middle elements when array given length is even', () => {
    const array = [1, 2, 3, 4];
    assertArraysEqual(middle(array), [2, 3]);
  });

  it('should return array with 1 middle element when array given length is odd', () => {
    const array = [1, 2, 3, 4, 5];
    assertArraysEqual(middle(array), [3]);
  });
});