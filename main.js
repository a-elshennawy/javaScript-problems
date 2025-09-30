// coming will be most famous JS tech. interview questions (uncomment to test)
// classic algorithm challenges
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

// 2- Check if a string is a palindrome
// palindeom : is a sequence that reads the same backword and forward (e.g: TENET)

// const textTocheck = "tenet";
// function checkPalindrome(string) {
//   return string === string.split("").reverse().join("");
// }
// console.log(`palindrome is : ${checkPalindrome(textTocheck)}`);

// 3- Find the factorial of a number
// factorial of an integer n is the product of all positive integers less than or equal to n
// note : factorial of 0 is 1 (just let it sink)

// function factorial(n) {
//   if (n < 0) return undefined;

//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(2));

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

// 5- Find the largest/smallest number in an array
let array = [1, 34, 99, 3, 92];

// a: with built-in
// function minMax(array) {
//   let min = Math.min(...array);
//   let max = Math.max(...array);

//   console.log(min, max);
// }
// minMax(array);

// b: no built-in (with addition of second largest number)
let min = array[0];
let max = array[0];
let secMax = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }

  if (array[i] > max) {
    secMax = max;
    max = array[i];
  } else if (array[i] > secMax) {
    secMax = array[i];
  }
}
console.log("smallest number is :", min);
console.log("largest number is :", max);
console.log("second largest number is :", secMax);
