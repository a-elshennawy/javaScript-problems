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
