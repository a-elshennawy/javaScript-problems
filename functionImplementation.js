// Function Implementation
// 1- Implement Array.prototype.map()
// Creates a new array by applying callback to each element

// arr = [1, 2, 3, 4, 5];
// callback = (x) => x * 2;
// const multiplier = {
//   factor: 10,
//   multiply: function (x) {
//     return x * this.factor;
//   },
// };

// arr2 = ["bankai", "zanka no tatchi"];
// callback2 = (str) => str.toUpperCase();

// function map(arr, callback, thisArg) {
//   // Edge case: empty, null, or undefined array
//   if (!arr || arr.length === 0) return [];
//   // Edge case: callback must be a function
//   if (typeof callback !== "function") {
//     throw new TypeError(callback + " is not a function");
//   }

//   const res = [];

//   //   iterate through each element
//   for (let i = 0; i < arr.length; i++) {
//     // skip holes in spares arrays (undefined elements)
//     if (i in arr) {
//       // call callback with (element, index, array) and proper 'this' contex
//       res[i] = callback.call(thisArg, arr[i], i, arr);
//     }
//   }

//   return res;
// }

// console.log(map(arr, callback));
// console.log(
//   map(
//     arr,
//     function (x) {
//       return x * this.factor;
//     },
//     multiplier
//   )
// );

// console.log(map(arr2, callback2));

// ************************************************

// 2- Implement Array.prototype.filter()
// Creates a new array with elements that pass the callback test

// arr = [1, 2, 3, 4, 11, 6, 7];
// callback = (x) => x > 3;

// function filter(arr, callback, thisArg) {
//   // Edge case: empty, null, or undefined array
//   if (!arr || arr.length === 0) return [];

//   // Edge case: callback must be a function
//   if (typeof callback !== "function") {
//     throw new TypeError(callback + " is not a function");
//   }

//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i in arr) {
//       if (callback.call(thisArg, arr[i], arr)) {
//         res.push(arr[i]);
//       }
//     }
//   }

//   return res;
// }
// console.log(filter(arr, callback));

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
arr = [1, 2, 3, 4];
callback = (acc, val) => acc + val;
initVal = 0;

console.log(reduce(arr, callback, initVal)); //10 (starting from 0 do sumission one by one)

arr2 = ["apple", "banana", "orange", "apple", "mango"];
callback2 = (acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
};
console.log(reduce(arr2, callback2, {})); //{ apple: 2, banana: 1, orange: 1, mango: 1 }
