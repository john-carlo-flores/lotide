const assertEqual = function(actual, expected) {
  let message = `✅ Assertion Passed: ${actual} === ${expected}`;
      
  if (actual !== expected) {
    message = `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  
  console.log(message);
  return message;
};

module.exports = assertEqual;
