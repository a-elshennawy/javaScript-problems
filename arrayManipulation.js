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

// 3 - rotate an array by k steps
// e.g arr = [1,2,3,4,5,6,7] while k = 3
// step k = 1 --> arr = [ 7,1,2,3,4,5,6 ]
// step k = 2 --> arr = [ 6,7,1,2,3,4,5 ]
// step k = 3 --> arr = [ 5,6,7,1,2,3,4 ]

// nums = [1, 2, 3, 4, 5, 6, 7];
// k = 3;

// a:
// function rotate(nums, k) {
//   k = k % nums.length;
//   const copyNums = [...nums];

//   for (let i = 0; i < nums.length; i++) {
//     let idx = i + k;
//     if (idx > nums.length - 1) {
//       idx = idx - nums.length;
//     }
//     nums[idx] = copyNums[i];
//   }

//   return nums;
// }
// console.log(rotate(nums, k));

// b:
// function rotate(arr, k) {
//   k = k % nums.length;
//   nums.unshift(...nums.splice(nums.length - k, k));
//   return nums;
// }
// console.log(rotate(nums, k));

// _______________________________________________________

// 4- Find intersection / union of arrays
// a:  separate arrays
// arr1 = [1, 2, 3, 4, 5];
// arr2 = [4, 5, 6, 7, 8];
// function intersections(arr1, arr2) {
//   return arr1.filter((e) => arr2.includes(e));
// }

// console.log(intersections(arr1, arr2));

// b: 2d arrays

// const nums = [
//   [3, 1, 2, 4, 5],
//   [1, 2, 3, 4],
//   [3, 4, 5, 6],
// ];
// b-1
// function findIntersections(arrays) {
//   // edge cases :
//   if (arrays.length === 0) return [];
//   // Handle edge case: only one array, return it as-is
//   if (arrays.length === 1) return arrays[0];

//   // Start with the first array converted to a Set
//   // Set allows fast lookups with .has() method
//   let result = new Set(arrays[0]);

//   // Loop through remaining arrays starting from index 1
//   for (let i = 1; i < arrays.length; i++) {
//     // Filter current array to keep only elements that exist in result Set
//     // Then create a new Set from the filtered elements
//     // This keeps only common elements between result and current array
//     result = new Set(arrays[i].filter((x) => result.has(x)));
//   }

//   // Convert Set back to array using spread operator [...]
//   // Sort numerically (a - b ensures proper number sorting)
//   return [...result].sort((a, b) => a - b);
// }
// console.log(findIntersections(nums));

// b-2
// function findIntersections(arrays) {
//   if (arrays.length === 0) return [];

//   // reduce combines all arrays step by step
//   // acc = accumulator (starts with first array)
//   // arr = current array being processed

//   return arrays.reduce((acc, arr) =>
//     // filter acc to only keep elements exists in curent arr
//     //  includes() checks if element exists in array
//     acc.filter((num) => arr.includes(num))
//   );
// }

// console.log(findIntersections(nums));

// b-3
// const findIntersections = (arrays) => {
//   // Handle edge case: empty input
//   if (!arrays.length) return [];

//   // Spread operator [...] converts final Set to array
//   return [
//     ...// reduce processes arrays one by one
//     arrays.reduce(
//       (acc, arr) =>
//         // Create new Set from filtered array
//         // Filter keeps only elements that exist in accumulator Set
//         new Set(arr.filter((x) => acc.has(x))),
//       // Initial value: first array as a Set
//       new Set(arrays[0])
//     ),
//     // Sort the final array numerically
//   ].sort((a, b) => a - b);
// };
// console.log(findIntersections(nums));

// _______________________________________________________

// 5- Sort an array without using built-in methods

// arr = [1, 3, 5, 4, 8, 2];

// function selectionSort(arr) {
//   const result = [...arr];
//   for (let i = 0; i < result.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < result.length; j++) {
//       if (result[j] < result[minIndex]) {
//         minIndex = j;
//       }
//     }

//     if (minIndex !== i) {
//       let temp = result[i];
//       result[i] = result[minIndex];
//       result[minIndex] = temp;
//     }
//   }

//   return result;
// }
// console.log(selectionSort(arr));

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
