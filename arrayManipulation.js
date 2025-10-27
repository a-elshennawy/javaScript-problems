// array manipilation

// _______________________________________________________

// 1- Flatten a nested array
// e.g arr = [1,2,3,[4,5,6],7,8,[9,10,[11,12]],13] <= this is a nested array
// to flatten it to 1 layer deep arr = [1,2,3,4,5,6,7,8,9,10,[11,12],13]
// for 2 layers deep ?  arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

arr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]], 13];
n = 2;
var flat = function (arr, n) {
  const res = [];
  function helper(arr, depth) {
    for (const value of arr) {
      if (typeof value === "object" && depth < n) {
        helper(value, depth + 1);
      } else {
        res.push(value);
      }
    }
    return res;
  }

  return helper(arr, 0);
};

console.log(flat(arr, n));

// time: O(k), where `k` is the total number of elements.
// space: O(k) for the output array plus O(n) for the recursion stack
// what is recrusion stack?

// k = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13
// k = 14

// _______________________________________________________

// 2- chunck array : to get smaller arrays with the length of a given size
// even sometimes last chunk will be less than the given size and it's fine

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
size = 3;

// a :
function chunck(arr, size) {
  const res = [];
  let subarr = [];

  for (let i = 0; i < arr.length; i++) {
    subarr.push(arr[i]);
    if (subarr.length === size) {
      res.push(subarr);
      subarr = [];
    }
  }
  if (subarr.length) {
    res.push(subarr);
  }
  return res;
}
console.log(chunck(arr, size));

// time: O(n)
// space: O(n)

// b:
function chunck_2(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}
console.log(chunck_2(arr, size));

// time: O(n)
// space: O(n)

// _______________________________________________________

// 3- Merge two sorted arrays
arr1 = [1, 7, 3, 5, 10];
arr2 = [2, 4, 5, 6, 11, 45];

function mergeSotedArrays(arr1, arr2) {
  // edge case: if either array is empty
  if (!arr1 || arr1.length === 0)
    return arr2 ? [...new Set(arr2.sort((a, b) => a - b))] : [];
  if (!arr2 || arr2.length === 0)
    return arr1 ? [...new Set(arr1.sort((a, b) => a - b))] : [];

  // Merge both arrays
  const result = [...arr1, ...arr2];

  // Sort and remove duplicates using Set
  return [...new Set(result.sort((a, b) => a - b))];
}

console.log(mergeSotedArrays(arr1, arr2));

// time: O((n + m) log (n + m))
// space: O(n + m)

// _______________________________________________________

// 7- Find pairs that sum to a target value
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
target = 10;

function findPairsWithSum(arr, target) {
  if (!arr || arr.length < 2) return [];

  const complementMap = new Map();
  const pairs = [];

  for (const num of arr) {
    const complement = target - num;
    if (complementMap.has(complement)) {
      pairs.push([complement, num]);
    }
    complementMap.set(num, true);
  }

  return pairs;
}

console.log(findPairsWithSum(arr, target));

// time: O(n)
// space: O(n)

// _______________________________________________________
