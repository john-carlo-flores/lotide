# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tothenextcode/lotide`

**Require it:**

`const _ = require('@tothenextcode/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Returns the first item in the array.

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
* `middle(...)`: Returns the middle item of the first of the array.

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
* `tail(...)`: Returns every item in the array except the first item (head).

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
