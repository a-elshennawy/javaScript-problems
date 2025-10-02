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
