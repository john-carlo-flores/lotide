const findKeyByValue = function(objArray, value) {
  for (const obj in objArray) {
    if (objArray[obj] === value) {
      return obj;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;