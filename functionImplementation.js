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

arr = [1, 2, 3, 4, 11, 6, 7];
callback = (x) => x > 3;

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
console.log(filter(arr, callback));
