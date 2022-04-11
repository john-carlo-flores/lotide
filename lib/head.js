const head = function(array) {
  if (array.length < 1) {
    return undefined;
  }
    
  return array[0];
};

module.exports = head;