const flatten = function(list) {
  let newArray = [];

  for (let item of list) {
    if (Array.isArray(item)) {
      const tempArray = flatten(item);
      tempArray.forEach(i => newArray.push(i));
    } else {
      newArray.push(item);
    }
  }

  return newArray;
};

console.log(flatten([[[1,2,3]], 4]));

module.exports = flatten;