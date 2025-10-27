// Function Implementation
// 1- Implement Array.prototype.map()
// Creates a new array by applying callback to each element

arr = [1, 2, 3, 4, 5];
callback = (x) => x * 2;
const multiplier = {
  factor: 10,
  multiply: function (x) {
    return x * this.factor;
  },
};

arr2 = ["bankai", "zanka no tatchi"];
callback2 = (str) => str.toUpperCase();

function map(arr, callback, thisArg) {
  // Edge case: empty, null, or undefined array
  if (!arr || arr.length === 0) return [];
  // Edge case: callback must be a function
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const res = [];

  //   iterate through each element
  for (let i = 0; i < arr.length; i++) {
    // skip holes in spares arrays (undefined elements)
    if (i in arr) {
      // call callback with (element, index, array) and proper 'this' contex
      res[i] = callback.call(thisArg, arr[i], i, arr);
    }
  }

  return res;
}

console.log(map(arr, callback));
console.log(
  map(
    arr,
    function (x) {
      return x * this.factor;
    },
    multiplier
  )
);

console.log(map(arr2, callback2));

// time: O(n)
// space: O(n)

// ************************************************

// 2- Implement Array.prototype.filter()
// Creates a new array with elements that pass the callback test

arr3 = [1, 2, 3, 4, 11, 6, 7];
callback3 = (x) => x > 3;

function filter(arr, callback, thisArg) {
  // Edge case: empty, null, or undefined array
  if (!arr || arr.length === 0) return [];

  // Edge case: callback must be a function
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (callback.call(thisArg, arr[i], arr)) {
        res.push(arr[i]);
      }
    }
  }

  return res;
}

console.log(filter(arr3, callback3));

// time: O(n)
// space: O(n)

// ************************************************

// 3- Implement Array.prototype.reduce()

function reduce(arr, callback, initVal) {
  if (!arr || arr.length === 0) {
    // if no initial value and empty array
    if (initVal === undefined) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    return initialValue;
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let accumulator;
  let startIndex;

  //   if initial value is provided
  if (initVal !== undefined) {
    accumulator = initVal;
    startIndex = 0;
  } else {
    // find first non-hole element to use it as initial value
    let foundStart = false;
    for (let i = 0; i < arr.length; i++) {
      if (i in arr) {
        accumulator = arr[i];
        startIndex = i + 1;
        foundStart = true;
        break;
      }
    }

    // if array has only holes and no initial value
    if (!foundStart) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
  }

  //   iterate through array from start index
  for (let i = startIndex; i < arr.length; i++) {
    // skip holes
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
}

arr4 = [1, 2, 3, 4];
callback4 = (acc, val) => acc + val;
initVal = 0;

console.log(reduce(arr4, callback4, initVal)); //10 (starting from 0 do sumission one by one)

arr5 = ["apple", "banana", "orange", "apple", "mango"];
callback5 = (acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
};
console.log(reduce(arr5, callback5, {})); //{ apple: 2, banana: 1, orange: 1, mango: 1 }

// time: O(n)
// space: O(1)

// ************************************************

// 4- Implement debounce function
// delays function excution until after wait time has elapsed since last call
// Useful for limiting API calls, search input, window resize events, etc.

function debounce(func, wait) {
  if (typeof func !== "function") {
    throw new TypeError("first arg must be a function");
  }

  let timeoutId = null;
  // return debounce function
  return function (...args) {
    // store context for proper 'this' binding
    const context = this;

    // clear prev timout if it exists
    // this resets the timer on each call
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // set new timeout to excute function after wait period
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// test
let searchCount = 0;
const search = debounce((query) => {
  searchCount++;
  console.log(`serach for: ${query} (call #${searchCount})`);
}, 1000);

// stimulate rapid typing
search("a"); // won't execute
search("ah"); // won't execute
search("ahm"); // won't execute
search("ahm"); // won't execute
search("ahme"); // won't execute
search("ahmed"); // Will execute after 1000ms of no more calls

// time: O(1)
// space: O(1)

// ************************************************

// 5- Implement throttle function

// Limits function execution to once per specified time period
// Useful for scroll events, mouse movements, API rate limiting, etc.

function throttle(func, wait) {
  if (typeof func !== "function") {
    throw new TypeError("First argument must be a function");
  }

  let isThrottled = false;
  let lastArgs = null;
  let lastContext = null;

  //   return throttle function
  return function (...args) {
    // if not throttled, execute immediatly
    if (!isThrottled) {
      func.apply(this, args);
      isThrottled = true;

      //   reset throttle after wait period
      setTimeout(() => {
        isThrottled = false;

        // If there were calls during throttle period, execute the last one
        if (lastArgs) {
          func.apply(lastContext, lastArgs);
          lastArgs = null;
          lastContext = null;

          //   re-throttle after executing queued call
          isThrottled = true;
          setTimeout(() => {
            isThrottled = false;
          }, wait);
        }
      }, wait);
    } else {
      // store last call to execute after throttle period
      lastArgs = args;
      lastContext = this;
    }
  };
}

// test:1
let scrollCount = 0;
const handleScroll = throttle(() => {
  scrollCount++;
  console.log(`scroll handler excuted! (call#${scrollCount})`);
}, 1000);

for (let i = 0; i < 10; i++) {
  handleScroll();
}
// Executes immediately once, then again after 1000ms
// Output: "Scroll handler executed! (call #1)" (immediate)
// Output after 1s: "Scroll handler executed! (call #2)" (trailing call)

// test:2
let moveCount = 0;
const trackMouse = throttle((x, y) => {
  moveCount++;
  console.log(`Mouse position: (${x}, ${y}) - call #${moveCount}`);
}, 500);

trackMouse(10, 20); // Executes immediately
trackMouse(15, 25); // Queued
trackMouse(20, 30); // Queued (replaces previous)
trackMouse(25, 35); // Queued (replaces previous)
// First call executes immediately
// Last call executes after 500ms

// time: O(1)
// space: O(1)

// ************************************************

// 6- Implement memoization/caching

function memoize(func) {
  if (typeof func !== "function") {
    throw new TypeError("argument must be a function");
  }

  //   cache to store results (key = stringified arguments, value = results)
  const cache = new Map();

  //   return memoized function
  return function (...args) {
    // created cache key from arguments
    // JSON.stringify handles arrays/objects, primitives work as-is
    const key = JSON.stringify(args);

    // if result exists incahce, return it (0(1) lookup)
    if (cache.has(key)) {
      console.log(`cache hit for args: ${key}`);
      return cache.get(key);
    }

    // otherwise, compute result and store in cache
    console.log(`Cache miss for args: ${key}`);
    const result = func.apply(this, args);
    cache.set(key, result);

    return result;
  };
}

// test: Expensive calculation (factorial)
function factorial(n) {
  console.log(`computing factorial`);
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
const memoizedFactorial = memoize(factorial);

console.log("First call:");
console.log(memoizedFactorial(5)); // 120 (computes)
console.log("\nSecond call (same input):");
console.log(memoizedFactorial(5)); // 120 (from cache!)
console.log("\nThird call (different input):");
console.log(memoizedFactorial(6)); // 720 (computes)

// time: O(m * T_original) for first occurrences & O(k) for cache lookup
// space: O(m), where m is the number of calls.

// ************************************************

// 7- Implement curry function

// Transforms a function to be called with arguments one at a time
// Returns new function until all arguments are collected, then executes

function curry(func) {
  // Edge case: func must be a function
  if (typeof func !== "function") {
    throw new TypeError("Argument must be a function");
  }

  // Get the number of parameters the function expects
  const arity = func.length;

  // Recursive function to collect arguments
  return function curried(...args) {
    // If we have enough arguments, execute the function
    if (args.length >= arity) {
      return func.apply(this, args);
    }

    // Otherwise, return a new function that collects more arguments
    return function (...nextArgs) {
      // Combine previous and new arguments, recurse
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

// test
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1, 2, 3));

// time: O(arity^2) in the worst case.
// space: O(arity^2) in the worst case.

// ************************************************
