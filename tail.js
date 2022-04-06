const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
    
  return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }

  return array.slice(1);
};
