const assert = require('chai').assert;
const countOnly = require('../lib/countOnly');

describe('#countOnly', function() {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it('should return count of Jason: 1 when Jason: true', function() {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Jason"], 1);
  });

  it('should return undefined when Karima: true but not in array list', function() {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Karima"], undefined);
  })

  it("should return undefined and not count Agouhanna: 1 when Agouhanna: false", function () {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Agouhanna"], undefined);
  });
});