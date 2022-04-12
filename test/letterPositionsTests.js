const assert = require('chai').assert;
const letterPositions = require('../lib/letterPositions');

describe('#letterPositions', () => {
  const word = "hello"

  it("should return letter position e: 1 in 'hello' for single instance", () => {
    const helloPosition = letterPositions(word);
    assert.deepEqual(helloPosition['e'], [1]);
  });

  it("should return letter position l: [2, 3] in 'hello' for multiple instances", () => {
    const helloPosition = letterPositions(word);
    assert.deepEqual(helloPosition['l'], [2, 3]);
  });

  it("should return empty object if string given is empty", () => {
    const helloPosition = letterPositions('');
    assert.strictEqual(Object.keys(helloPosition).length, 0);
  });
});