const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
    
  return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if(itemsToCount[item]) {
      results[item] = ++results[item] || 1;
    }
  }

  return results;
}
