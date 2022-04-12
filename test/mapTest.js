const assert = require('chai').assert;
const map = require('../lib/map');

describe('#map', () => {
  it("should return new array each containing first letter when callback function w => w[0] is given", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, w => w[0]);
    assert.deepEqual(result, ['g','c','t','m','t']);
  });

  it("should return new array each containing length of string elements when callback function w => w.length is given", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, w => w.length);
    assert.deepEqual(result, [6, 7, 2, 5, 3]);
  });

  it("should return new array each containing element * 2 when callback function n => n * 2 is given", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = map(numbers, n => n * 2);
    assert.deepEqual(result, [2, 4, 6, 8, 10]);
  });

  it("should return new array each containing pythaegoren theorem based on object array with x and y", () => {
    const input = [
      { x: 3, y: 4 },
      { x: 12, y: 5 },
      { x: 8, y: 15 }
    ];
    const result = input.map(obj => Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.y, 2)));
    assert.strictEqual(result[1], 13);
  });
});