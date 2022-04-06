const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
    
  return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(array) {
  if (array.length < 1) {
    return undefined;
  }
    
  return array[0];
};
