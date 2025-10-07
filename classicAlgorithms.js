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

// time:
// Splitting the string with `split("")` takes O(n),
// where n is the length of the string
// Reversing the array with `reverse()` also takes O(n).
// Joining the array back into a string with `join("")` takes O(n).
// Overall, the total time complexity is O(n) + O(n) + O(n) = O(n).

// space:
// The `split` operation creates an array of size n, which requires O(n) space.
// The `reverse` operation is in-place and does not require additional space.
// The `join` operation creates a new string of length n, requiring O(n) space.
// the total space complexity is dominated by the array and the resulting string,
// which is O(n).

// b: second way

// function reverse(string) {
//   let reversedString = "";
//   for (const c of string) {
//     reversedString = c + reversedString;
//   }
//   console.log(reversedString);
// }
// reverse(string);

// time:
// O(n), where n is the length of the input string.
// because the loop runs n times

// space:
// O(n), since the reversedString variable stores a new string that in worset case
// is the same length as the input string

// c: third way
// function reverse(string) {
//   let reversedString = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedString += string[i];
//   }
//   console.log(reversedString);
// }
// reverse(string);

// time:
// iterates through each character of the input string exactly once,
// starting from the last character to the first.
// if length is n, the loop runs n times
// overall time complexity is O(n).

// space:
// creates a new string reversedString that,
// in the worst case, will be of length n.
// the space complexity is O(n).

//__________________________________________________________________________

// 2- Check if a string is a palindrome
// palindeom : is a sequence that reads the same backword and forward (e.g: TENET)

// const textTocheck = "tenet";
// function checkPalindrome(string) {
//   return string === string.split("").reverse().join("");
// }
// console.log(`palindrome is : ${checkPalindrome(textTocheck)}`);

// time: O(n).
// space: O(n).

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

// time: O(n)
// space: O(n)

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

// time: O(n)
// space: O(1)

//__________________________________________________________________________

// 6- Remove duplicates from an array
// const nums = [1, 33, 44, 6, 1, 44];

// const noDups = [...new Set(nums)];
// console.log(noDups);

// time: O(n)
// space: O(n)
