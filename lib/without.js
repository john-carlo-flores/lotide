const without = function(source, itemsToRemove) {
  let newArray = source;

  for (let item of itemsToRemove) {
    let index = source.indexOf(item);

    if (index !== -1) {
      newArray.splice(index, 1);
    }
  }

  return newArray;
};

module.exports = without;