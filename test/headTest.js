const assert = require('chai').assert;
const head = require('../head');

describe('#head', function() {
  it("should return 1 for [1,2,3]", function() {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should return '5' for ['5']", function() {
    assert.strictEqual(head(['5']), '5');
  });

  it("should return 5 for [5,6,7]", function() {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("should return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", function() {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
});