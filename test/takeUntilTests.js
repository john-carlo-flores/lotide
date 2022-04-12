const assert = require('chai').assert;
const takeUntil = require('../lib/takeUntil');

describe('#takeUntil', () => {
  it('should return [1, 2, 5, 7, 2] from [1, 2, 5, 7, 2, -1, 2, 4, 5] when callback function given in x => x < 0', () => {
    const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(array, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

  it("should ['I've', 'been', 'to', 'Hollywood'] from ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] when callback function given is x => x === ','", () => {
    const array = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(array, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });

  it('should return an empty array when an empty array is given', () => {;
    const emptyArray = [];
    assert.strictEqual(takeUntil(emptyArray, x => x).length, 0);
  });
});