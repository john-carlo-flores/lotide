const { assert } = require("console");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
    
  return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  const letters = {};

  for (const char of sentence) {
    if (isLetter(char)) {
      letters[char] = ++letters[char] || 1;
    }
  }

  return letters;
};

const isLetter = function(letter) {
  if (letter.toLowerCase().charCodeAt(0) >= 97
  && letter.toLowerCase().charCodeAt(0) <= 122) {
    return true;
  }

  return false;
};

//TEST CODE
const letterCount = countLetters("lighthouse in the house");

assertEqual(letterCount['l'], 1);
assertEqual(letterCount['h'], 4);
assertEqual(letterCount[' '], undefined);
assertEqual(letterCount['s'], 2);