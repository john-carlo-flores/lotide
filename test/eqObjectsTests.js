const assert = require('chai').assert;
const eqObjects = require('../lib/eqObjects');

describe('#eqObjects', () => {
  it('should return true for objects with the same key-value pairs in different order declaration', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });

  it('should return false for objects - one with an extra key-value pair', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc));
  });

  it('should return true for same objects with arrays in different order declariation', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc));
  });

  it('should return false for objects with same keys and similar values but one has an extra element in array', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(cd, cd2));
  });

  it('should return true for nested objects with same key value pair', () => {
    const ab = { a: { z: 1 }, b: 2 };
    const ba = { a: { z: 1 }, b: 2 };
    
    assert.isTrue(eqObjects(ab, ba));
  });

  it('should return false for objects with same key-values at the first level but not at the nested level', () => {
    const ayz = { a: { y: 0, z: 1 }, b: 2 };
    const ay = { a: { z: 1 }, b: 2 };

    assert.isFalse(eqObjects(ayz, ay));
  });
});




