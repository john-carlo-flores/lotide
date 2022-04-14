# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jcarloflores/lotide`

**Require it:**

`const _ = require('@jcarloflores/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(sentence)`: Returns an object with key-value pairs with a total count for each letter.

  __Since__
  +  `1.0.1`

  __Arguments__
  * sentence (String): The string to process.

  __Returns__
  * (Object): Returns an object with key-value pair summary per letter.

  __Example__
  ```javascript
  _.countLetters('Hello World');
  // => { h: 1, 
  //      e: 1, 
  //      l: 3, 
  //      o: 2, 
  //      w: 1, 
  //      r: 1, 
  //      d: 1 }
  ```
* `countOnly(allItems, itemsToCount)`: Returns an object with key-value pair count based on itemsToCount object of matching key and boolean value of true.

  __Since__
  +  `1.0.1`

  __Arguments__
  * allItems (Array): Array of strings to process.
  * itemsToCount (Object): Object with keys of what to count paired with boolean values.

  __Returns__
  * (Object): Returns an object with key-value pair count for each matching key with true values.

  __Example__
  ```javascript
  const firstNames = [
    "Hello",
    "World",
    "Foo",
    "Bar",
    "Code",
    "World",
    "Bar",
  ];

  _.countOnly(firstNames, { World: true, Blaster: true, Bar: false});
  // => { World: 2 }
  ```
* `eqArrays(array1, array2)`: Returns a boolean value depending whether or not both arrays are strictly equal to each other.

  __Since__
  +  `1.0.1`

  __Arguments__
  * array1 (Array): First array for comparison.
  * array2 (Array): Second array for comparison.

  __Returns__
  * (Boolean): Returns an boolean value (true or false) if both arrays are strictly equal.

  __Example__
  ```javascript
  const array1 = [1, [2], 3];
  const array2 = [1, [2], 3];

  _.eqArrays(array1, array2);
  // => true
  ```
* `eqObjects(object1, object2)`: Returns a boolean value depending whether or not both objects are strictly equal to each other.

  __Since__
  +  `1.0.1`

  __Arguments__
  * object1 (Object): First object for comparison.
  * object2 (Object): Second object for comparison.

  __Returns__
  * (Boolean): Returns an boolean value (true or false) if both objects are strictly equal.

  __Example__
  ```javascript
  const object1 = {a: 1, b: {c: 2}, d: 2};
  const object2 = {a: 1, d: 2, b: {c: 2}};

  _.eqObjects(object1, object2);
  // => true
  ```
* `findKey(object, callback)`: Returns key of object if the value of the key is truthy when using with the callback.

  __Since__
  +  `1.0.1`

  __Arguments__
  * object (Object): The object to evaluate.
  * callback (Function): Callback function that takes in object[key] as argument.

  __Returns__
  * (Object): Returns first key with truthy callback(value).

  __Example__
  ```javascript
  const toys = () => {
    "car":     { shelflife: 3},
    "ball":    { shelflife: 2},
    "doll":    { shelflife: 4),
    "device":  { shelflife: 2},
    "top":     { shelflife: 5},
  }

  _.findKey(toys, toy =>  toy.shelflife === 2);
  // => "ball"
  ```
* `flatten(array)`: Returns an array without any nesting.

  __Since__
  +  `1.0.1`

  __Arguments__
  * array (Array): The array to evaluate.

  __Returns__
  * (Object): Returns flattened array.

  __Example__
  ```javascript
  const array = [1, 2, [3, 4], 5, [6]];

  _.flatten(array);
  // => [1, 2, 3, 4, 5, 6]
  ```
* `head(array)`: Returns the first item in the array.

  __Since__
  +  `1.0.0`

  __Arguments__
  * array (Array): The array to process.

  __Returns__
  * (Array): Returns the first element of array.

  __Example__
  ```javascript
  _.head(['a', 'b', 'c']);
  // => 'a'

  _.head([1, 2, 3]);
  // => 1
  ```
* `letterPositions(sentence)`: Returns an object with key-value pairs that correspond to the index locations of each letter from provided string.

  __Since__
  +  `1.0.1`

  __Arguments__
  * sentence (String): The string to evaluate.

  __Returns__
  * (Object): Returns object index locations of each letter in the sentence.

  __Example__
  ```javascript
  const sentence = "hello";

  _.letterPositions(sentence);
    // => { h: [0], 
    //      e: [1], 
    //      l: [2, 3], 
    //      o: [4] }
  ```
* `map(array, callback)`: Returns a new array with each value modified based on the callback.

  __Since__
  +  `1.0.1`

  __Arguments__
  * array (Array): The array to evaluate.
  * callback (Function): Callback function that modifies each object[key].

  __Returns__
  * (Object): Returns new array where each value has been modified by the callback function.

  __Example__
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  _.map(numbers, n => n * 2);
  // => [2, 4, 6, 8, 10]
  ```
* `middle(array)`: Returns the middle item of the first of the array.

  __Since__
  +  `1.0.0`

  __Arguments__
  * array (Array): The array to process.

  __Returns__
  * (Array): Returns the middle element of array. If the array length is even, it will return two elements.

  __Example__
  ```javascript
  _.middle(['a', 'b', 'c']);
  // => 'b'

  _.middle([1, 2, 3, 4]);
  // => '[2, 3]
  ```
* `tail(array)`: Returns every item in the array except the first item (head).

  __Since__
  +  `1.0.0`

  __Arguments__
  * array (Array): The array to process.

  __Returns__
  * (Array): Returns every item in an array except the first item.

  __Example__
  ```javascript
  _.tail(['a', 'b', 'c']);
  // => ['b', 'c']

  _.tail([1, 2, 3, 4]);
  // => '[2, 3, 4]
  ```
* `takeUntil(array, callback)`: Evaluates each element starting from the beginning until callback evaluates true.

  __Since__
  +  `1.0.1`

  __Arguments__
  * array (Array): The array to evaluate.
  * callback (Function): Callback function that evaluates each element.

  __Returns__
  * (Array): Returns new array with elements up till element satisfies callback condition.

  __Example__
  ```javascript
  const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  _.takeUntil(array, x => x < 0);
  // => [ 1, 2, 5, 7, 2 ]
  ```
* `without(source, itemsToRemove)`: Evaluates each element in the array and removes elements that match itemsToRemove.

  __Since__
  +  `1.0.1`

  __Arguments__
  * source (Array): The array to evaluate.
  * itemsToRemove (Array): The array containing elements to compare for removal.

  __Returns__
  * (Array): Returns new array with elements that do not contain itemsToRemove.

  __Example__
  ```javascript
  const array = [1, 2, 3];
  _.without(array, [1]);
  // => [2, 3]
  ```
