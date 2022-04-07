const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  }

  return console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  
  return true;
};

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

//TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];

assertArraysEqual(map(words, w => w[0]), ['g','c','t','m','t']);
assertArraysEqual(map(words, w => w.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(numbers, n => n * 2), [2, 4, 6, 8, 10]);

const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map(obj => Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.y, 2)));

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
