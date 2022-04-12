const assert = require('chai').assert;
const findKeyByValue = require('../lib/findKeyByValue');

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("should return key pair when value exists in the object", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("should return undefined when value does not exist in the object", () => {
    assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});