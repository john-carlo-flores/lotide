const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
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