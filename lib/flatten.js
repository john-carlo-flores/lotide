const flatten = function(list) {
  let newArray = [];

  for (let item of list) {
    if (Array.isArray(item)) {
      item.forEach(i => newArray.push(i));
    } else {
      newArray.push(item);
    }
  }

  return newArray;
};

module.exports = flatten;