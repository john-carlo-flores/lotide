const middle = function(list) {
  if (list.length < 3) {
    return [];
  }

  let middle = Math.floor(list.length / 2);

  if (list.length % 2 === 0) {
    return list.slice(middle -1, middle + 1);
  }
    
  return list.slice(middle, middle + 1);

};

module.exports = middle;