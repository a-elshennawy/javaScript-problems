// coming will be most famous JS tech. interview questions (uncomment to test)
// classic algorithm challenges

//__________________________________________________________________________

// 1- reverse a string

// const string = "hello, dev";

// a: first way

// function reversed(string) {
//   return string.split("").reverse().join("");
// }

// const reversedString = reversed(string);
// console.log(reversedString);

// b: second way

// function reverse(string) {
//   let reversedString = "";
//   for (const c of string) {
//     reversedString = c + reversedString;
//   }
//   console.log(reversedString);
// }
// reverse(string);

// c: third way
// function reverse(string) {
//   let reversedString = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedString += string[i];
//   }
//   console.log(reversedString);
// }
// reverse(string);

// d: fourth way
// function reversed(string) {
//   return Array.from(string).reduce(
//     (reversedString, c) => c + reversedString,
//     ""
//   );
// }
// const reversedString = reversed(string);
// console.log(reversedString);

//__________________________________________________________________________

// 2- Check if a string is a palindrome
// palindeom : is a sequence that reads the same backword and forward (e.g: TENET)

// const textTocheck = "tenet";
// function checkPalindrome(string) {
//   return string === string.split("").reverse().join("");
// }
// console.log(`palindrome is : ${checkPalindrome(textTocheck)}`);

//__________________________________________________________________________

// 3- Find the factorial of a number
// factorial of an integer n is the product of all positive integers less than or equal to n
// note : factorial of 0 is 1 (just let it sink)

// function factorial(n) {
//   if (n < 0) return undefined;

//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(2));

//__________________________________________________________________________

// 4- Generate Fibonacci sequence
// Fibonacci sequence : is a sequence where each number is the sum of of the two previous ones & the first 2 number are 0,1
// Fibonacci(2) = [0,1]
// Fibonacci(3) = [0,1,1]
// Fibonacci(7) = [0,1,1,2,3,5,8]

// function fibonacci(n) {
//   if (n === 0) return [];
//   if (n === 1) return [0];

//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// console.log(fibonacci(23));

//__________________________________________________________________________

// 5- Find the largest/smallest number in an array
// let array = [1, 34, 99, 3, 92];

// a: with built-in
// function minMax(array) {
//   let min = Math.min(...array);
//   let max = Math.max(...array);

//   console.log(min, max);
// }
// minMax(array);

// b: no built-in (with addition of second largest number)
// let min = array[0];
// let max = array[0];
// let secMax = array[0];
// for (let i = 1; i < array.length; i++) {
//   if (array[i] < min) {
//     min = array[i];
//   }

//   if (array[i] > max) {
//     secMax = max;
//     max = array[i];
//   } else if (array[i] > secMax) {
//     secMax = array[i];
//   }
// }
// console.log("smallest number is :", min);
// console.log("largest number is :", max);
// console.log("second largest number is :", secMax);

//__________________________________________________________________________

// 6- Remove duplicates from an array
// const nums = [1, 33, 44, 6, 1, 44];

// a :
// const noDups = [...new Set(nums)];
// console.log(noDups);

// b:
// const noDups = nums.filter((n, i) => {
//   return nums.indexOf(n) === i;
// });
// console.log(noDups);

//__________________________________________________________________________

// 7- Find missing number in array sequence
// const arr = [1, 2, 3, 6, 4, 7, 9, 8];
// // a: sum formula ( n*(n+1)/ 2 )
// function findMissing(arr) {
//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((sum, num) => sum + num, 0);
//   return expectedSum - actualSum;
// }
// console.log(findMissing(arr));

// b: if need to find multiple missings ?
// const arr = [1, 2, 3, 6, 4, 7, 9, 8, 11];

// function findMissing(arr, min, max) {
//   const set = new Set(arr);
//   const missings = [];

//   for (let i = min; i <= max; i++) {
//     if (!set.has(i)) {
//       missings.push(i);
//     }
//   }
//   return missings;
// }
// console.log(findMissing(arr, 1, 11));

//__________________________________________________________________________

// 8- Anagram checker
// anagram : word or phrase formed by rearranging the letters of another word or phrase, using all original letters exactly once.
// e.g: "listen" and "silent" are anagrams.
// a: sorting method
// function anagramCheck(str1, str2) {
//   // removing spaces and to lowerCase
//   const clean1 = str1.replace(/\s/g, "").toLowerCase();
//   const clean2 = str2.replace(/\s/g, "").toLowerCase();

// or you can do this to remove are special characters too
//   const clean1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
//   const clean2 = str2.replace(/[^a-z0-9]/gi, "").toLowerCase();

//   //   if not same length
//   if (clean1.length !== clean2.length) return false;

//   //   sort and compare
//   return clean1.split("").sort().join("") === clean2.split("").sort().join("");
// }

// console.log(anagramCheck("silent", "listen"));

// b:  Character Frequency Map
// function anagramCheck(str1, str2) {
//   const clean1 = str1.replace(/\s/g, "").toLowerCase();
//   const clean2 = str2.replace(/\s/g, "").toLowerCase();

//   if (clean1.length !== clean2.length) return false;
//   const charCount = {};

//   //  count chars of first string
//   for (let char of clean1) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   //   substract characters from second string
//   for (let char of clean2) {
//     if (!charCount[char]) return false;
//     charCount[char]--;
//   }

//   return true;
// }

// console.log(anagramCheck("silent", "listen"));
// console.log(anagramCheck("cat", "mat"));

// c: Map Object
// function anagramCheck(str1, str2) {
//   const cleanStr1 = str1.replace(/\s/, "").toLowerCase();
//   const cleanStr2 = str2.replace(/\s/, "").toLowerCase();

//   if (cleanStr1.length !== cleanStr2.length) return false;

//   const map = new Map();

//   for (let char of cleanStr1) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }

//   for (let char of cleanStr2) {
//     if (!map.has(char) || map.get(char) === 0) return false;
//     map.set(char, map.get(char) - 1);
//   }

//   return true;
// }

// console.log(anagramCheck("shit", "hits"));

// d: Find All Anagrams in Array
// function allAnagrams(words) {
//   const map = new Map();

//   for (let word of words) {
//     const sorted = word.toLowerCase().split("").sort().join("");

//     if (!map.has(sorted)) {
//       map.set(sorted, []);
//     }
//     map.get(sorted).push(word);
//   }

//   return Array.from(map.values());
// }

// words = ["listen", "silent", "eslint", "car", "rac", "cat"];
// console.log(allAnagrams(words));

//__________________________________________________________________________

// 9- FizzBuzz
// Write a program that prints numbers from 1 to n, but:
// For multiples of 3, print "Fizz" instead of the number
// For multiples of 5, print "Buzz" instead of the number
// For multiples of both 3 and 5, print "FizzBuzz"
// Otherwise, print the number
// e.g (1 to 15)
// 1
// 2
// Fizz      (3 is divisible by 3)
// 4
// Buzz      (5 is divisible by 5)
// Fizz      (6 is divisible by 3)
// 7
// 8
// Fizz      (9 is divisible by 3)
// Buzz      (10 is divisible by 5)
// 11
// Fizz      (12 is divisible by 3)
// 13
// 14
// FizzBuzz  (15 is divisible by both 3 and 5)

// a: basic
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log("fizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(15);

// b: more flexible way
// function fizzBuzz(n) {
//   for (i = 1; i <= n; i++) {
//     let output = "";

//     if (i % 3 === 0) output += "fizz";
//     if (i % 5 === 0) output += "buzz";

//     console.log(output || i);
//   }
// }
// fizzBuzz(15);

// c: return as an array
// function fizzBuzz(n) {
//   const result = [];

//   for (let i = 1; i <= n; i++) {
//     let value = "";

//     if (i % 3 === 0) value += "Fizz";
//     if (i % 5 === 0) value += "Buzz";

//     result.push(value || i);
//   }

//   return result;
// }

// console.log(fizzBuzz(15));

// d: one-linear
// const fizzBuzz = (n) =>
//   Array.from({ length: n }, (_, i) => {
//     const num = i + 1;
//     return (num % 3 ? "" : "fizz") + (num % 5 ? "" : "buzz") || num;
//   });

// console.log(fizzBuzz(15));

//__________________________________________________________________________

// 10- two sum problem
// given array of integers "nums" and an integer "target"
// return indices of the two numbers such that they add up to target
// each input have only 1 solution
// do not use same element twice

// const nums = [2, 3, 4];
// const target = 6;
// a :
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let x = i + 1; x < nums.length; x++) {
//       if (nums[i] + nums[x] === target) return [i, x];
//     }
//   }
// }
// console.log(twoSum(nums, target));

// b:
// function twoSum(nums, target) {
//   const obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     const match = target - nums[i];
//     if (match in obj) return [i, obj[match]];
//     obj[nums[i]] = i;
//   }
// }

// console.log(twoSum(nums, target));
