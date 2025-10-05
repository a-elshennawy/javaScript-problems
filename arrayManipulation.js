// array manipilation

// _______________________________________________________

// 1- Flatten a nested array
// e.g arr = [1,2,3,[4,5,6],7,8,[9,10,[11,12]],13] <= this is a nested array
// to flatten it to 1 layer deep arr = [1,2,3,4,5,6,7,8,9,10,[11,12],13]
// for 2 layers deep ?  arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// arr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]], 13];
// n = 2;
// var flat = function (arr, n) {
//   const res = [];
//   function helper(arr, depth) {
//     for (const value of arr) {
//       if (typeof value === "object" && depth < n) {
//         helper(value, depth + 1);
//       } else {
//         res.push(value);
//       }
//     }
//     return res;
//   }

//   return helper(arr, 0);
// };

// console.log(flat(arr, n));

// _______________________________________________________

// 2- chunck array : to get smaller arrays with the length of a given size
// even sometimes last chunk will be less than the given size and it's fine

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// size = 3;

// a :
// function chunck(arr, size) {
//   const res = [];
//   let subarr = [];

//   for (let i = 0; i < arr.length; i++) {
//     subarr.push(arr[i]);
//     if (subarr.length === size) {
//       res.push(subarr);
//       subarr = [];
//     }
//   }
//   if (subarr.length) {
//     res.push(subarr);
//   }
//   return res;
// }
// console.log(chunck(arr, size));

// b:
// function chunck(arr, size) {
//   const res = [];
//   for (let i = 0; i < arr.length; i += size) {
//     res.push(arr.slice(i, i + size));
//   }
//   return res;
// }
// console.log(chunck(arr, size));

// _______________________________________________________

// 6- Merge two sorted arrays
// arr1 = [1, 7, 3, 5, 10];
// arr2 = [2, 4, 5, 6, 11, 45];
// function mergeSotedArrays(arr1, arr2) {
//   // edge case: if either array is empty
//   if (!arr1 || arr1.length === 0)
//     return arr2 ? [...new Set(arr2.sort((a, b) => a - b))] : [];
//   if (!arr2 || arr2.length === 0)
//     return arr1 ? [...new Set(arr1.sort((a, b) => a - b))] : [];

//   // Merge both arrays
//   const result = [...arr1, ...arr2];

//   // Sort and remove duplicates using Set
//   return [...new Set(result.sort((a, b) => a - b))];
// }

// console.log(mergeSotedArrays(arr1, arr2));

// _______________________________________________________

// 7- Find pairs that sum to a target value
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// target = 10;

// function findPairsWithSum(arr, target) {
//   // edge case : empty or null array, or less than 2 elements
//   if (!arr || arr.length < 2) return [];

//   const seen = new Set(); // Track numbers we've seen
//   const pairs = []; // Store result pairs
//   const usedPairs = new Set(); // Track pairs to avoid duplicates

//   for (let num of arr) {
//     const complement = target - num;
//     //  if we've seen the complement, we found a pair
//     if (seen.has(complement)) {
//       // Create a unique key for this pair (sorted to handle [2,3] vs [3,2])
//       const pairKey = [
//         Math.min(num, complement),
//         Math.max(num, complement),
//       ].join(",");

//       //   only if we haven't used this pair before
//       if (!usedPairs.has(pairKey)) {
//         pairs.push([complement, num]);
//         usedPairs.add(pairKey);
//       }
//     }
//     seen.add(num);
//   }

//   return pairs;
// }
// console.log(findPairsWithSum(arr, target));

// _______________________________________________________
