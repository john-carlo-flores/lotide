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