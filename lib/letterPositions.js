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

const letterPositions = function(sentence) {
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    let letter = sentence[index].toLowerCase();

    if (isLetter(letter)) {
      if (!results[letter]) {
        results[letter] = [];
      }
        
      results[letter].push(index);
    }
  }

  return results;
};

const isLetter = function(letter) {
  if (letter.toLowerCase().charCodeAt(0) >= 97
  && letter.toLowerCase().charCodeAt(0) <= 122) {
    return true;
  }

  return false;
};

//TEST CODE
const helloPosition = letterPositions("hello");
assertArraysEqual(helloPosition['h'], [0]);
assertArraysEqual(helloPosition['e'], [1]);
assertArraysEqual(helloPosition['l'], [2,3]);
assertArraysEqual(helloPosition['o'], [4]);