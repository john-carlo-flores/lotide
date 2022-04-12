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

module.exports = letterPositions;