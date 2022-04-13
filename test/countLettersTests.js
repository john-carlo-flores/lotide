const assert = require('chai').assert;
const countLetters = require('../lib/countLetters');

describe('#countLetters', function() {
  
  it("should return a count of h: 4 from 'lighthouse in the house'", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount['h'], 4);
  });

  it("should not return a count for non-alphabet characters", function() {
    const letterCount = countLetters("lighthouse in the house");
    assert.strictEqual(letterCount[' '], undefined);
  });

  it("should ignore case-sensitive and return a count of t: 2 from Lighthouse In The House", function() {
    const letterCount = countLetters("Lighthouse In The House");
    assert.strictEqual(letterCount['t'], 2);
  });
});