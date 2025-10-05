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
