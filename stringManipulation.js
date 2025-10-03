// 1- Count character occurrences
// str = "shennawy";
// // a: normal
// function countCharOcc(str) {
//   if (!str || str.length === 0) return {};

//   const charCount = {};

//   //   iterate through each character
//   for (let char of str) {
//     // inc count if exists, otherwise init to 1
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   return charCount;
// }
// console.log(countCharOcc(str));

// // b: for special characters and non-string keys
// str2 = "shenno1123";
// function countCharOccMap(str) {
//   if (!str || str.length === 0) return {};

//   const charCount = new Map();

//   for (let char of str) {
//     charCount.set(char, (charCount.get(char) || 0) + 1);
//   }
//   return charCount;
// }
// console.log(countCharOccMap(str2));

// ######################################################

// 2-  Find the longest word in a string
// str = "hello, i am shennawy and i wanna kill myself";
// function findLongestWord(str) {
//   if (!str || str.trim().length === 0) return "";

//   //   split  by whitespace and filter out empty string
//   const words = str.trim().split(/\s+/);

//   let longestWord = "";

//   //   iterate through each word to find the longest
//   for (let word of words) {
//     // remove punctuation from word for accurate length
//     const cleanWord = word.replace(/[^\w]/g, "");

//     if (cleanWord.length > longestWord.length) {
//       longestWord = cleanWord;
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord(str));

// ######################################################

// 2- Capitalize the first letter of each word

// str = "hello, i am shennawy and i wanna kill myself";
// a: normal way
// function capitalizeWords(str) {
//   if (!str || str.length === 0) return "";
//   // Split by spaces, capitalize each word, and join back
//   return str
//     .split(" ")
//     .map((word) => {
//       // Handle empty strings from multiple spaces
//       if (word.length === 0) return word;
//       // Capitalize first letter and concatenate with rest of word (lowercase)
//       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     })
//     .join(" ");
// }

// console.log(capitalizeWords(str));

// b: using regex
// function capitalizeWords(str) {
//   if (!str || str.length === 0) return "";

//   return str.replace(/\b\w/g, (char) => char.toUpperCase());
// }
// console.log(capitalizeWords(str));

// ######################################################

// 3- Reverse words in a sentence
// str = "hello, i'm cristiano ronaldo";
// a: with built-in
// function reverseWords(str) {
//   if (!str || str.trim().length === 0) return "";

//   //   split by whitespace, reverse array, join with single space
//   return str
//     .trim() //remove leading /  trailling spaces
//     .split(/\s+/) //split by one or more spaces
//     .reverse()
//     .join(" ");
// }
// console.log(reverseWords(str));

// b: no built-in
// function reverseWords(str) {
//   if (!str || str.trim().length === 0) return "";

//   const words = str.trim().split(/\s+/);
//   const reversed = [];

//   //   iterate backwords through words array
//   for (let i = words.length - 1; i >= 0; i--) {
//     reversed.push(words[i]);
//   }

//   return reversed.join(" ");
// }

// console.log(reverseWords(str));

// ######################################################

// 4- Check for balanced parentheses/brackets

// str =
//   "this function() should recognise[] true {parentheses / brackets} balance () or [] or {}";

// function isBalanced(str) {
//   if (!str || str.length === 0) return true; //considered balanced

//   const stack = [];

//   // map closing brackets to their opening counterparts
//   const bracketMap = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };

//   // opening brackets set for quick lookup
//   const openBrackets = new Set(["(", "{", "["]);

//   for (let char of str) {
//     // if it's an opening bracket, push to stack
//     if (openBrackets.has(char)) {
//       stack.push(char);
//     }
//     //   if it's a closing bracket
//     else if (char in bracketMap) {
//       // check if stack is empty (no matching opening bracket)
//       if (stack.length === 0) return false;

//       // pop from stack and check if it matches
//       const top = stack.pop();
//       if (top !== bracketMap[char]) return false;
//     }
//     // ignore other letters

//     return stack.length === 0;
//   }
// }

// console.log(isBalanced(str));

// ######################################################

// 5- String compression (e.g., "aaa" → "a3")

// str = "aaaaaa ffffrickkk";

// function compressString(str) {
//   if (!str || str.length === 0) return "";
//   if (str.length === 1) return str;

//   let compressed = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     // if next char is the same, increment count
//     if (i + 1 < str.length && str[i] === str[i + 1]) {
//       count++;
//     } else {
//       // add char and count to result
//       compressed += str[i];
//       if (count > 1) {
//         compressed += count;
//       }
//       count = 1; //reset count
//     }
//   }

//   return compressed.length < str.length ? compressed : str;
// }
// console.log(compressString(str));
