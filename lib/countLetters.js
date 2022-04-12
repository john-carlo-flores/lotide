const countLetters = function(sentence) {
  const letters = {};

  for (const char of sentence) {
    if (isLetter(char)) {
      letters[char.toLowerCase()] = ++letters[char.toLowerCase()] || 1;
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

module.exports = countLetters;
