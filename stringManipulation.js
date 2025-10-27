// string manipulation

// 1- Count character occurrences
str = "shennawy";
// // a: normal

function countCharOcc(str) {
  if (!str || str.length === 0) return {};

  const charCount = {};

  //   iterate through each character
  for (let char of str) {
    // inc count if exists, otherwise init to 1
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

console.log(countCharOcc(str));

// time: O(n)
// space: O(n)

// // b: for special characters and non-string keys
str2 = "shenno1123";

function countCharOccMap(str) {
  if (!str || str.length === 0) return {};

  const charCount = new Map();

  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  return charCount;
}

console.log(countCharOccMap(str2));

// time: O(n)
// space: O(k) , where k is the number of unique characters in the string

// ######################################################

// 2-  Find the longest word in a string
string = "hello, i am shennawy and i want to sleep";

function findLongestWord(str) {
  if (!str || str.trim().length === 0) return "";

  //   split  by whitespace and filter out empty string
  const words = str.trim().split(/\s+/);

  let longestWord = "";

  //   iterate through each word to find the longest
  for (let word of words) {
    // remove punctuation from word for accurate length
    const cleanWord = word.replace(/[^\w]/g, "");

    if (cleanWord.length > longestWord.length) {
      longestWord = cleanWord;
    }
  }

  return longestWord;
}

console.log(findLongestWord(string));

// time: O(n)
// space: O(n)

// ######################################################

// 3- Capitalize the first letter of each word

string_2 = "hello, i am shennawy and i am totally fine :)";
// a: normal way

function capitalizeWords(str) {
  if (!str || str.length === 0) return "";
  // Split by spaces, capitalize each word, and join back
  return str
    .split(" ")
    .map((word) => {
      // Handle empty strings from multiple spaces
      if (word.length === 0) return word;
      // Capitalize first letter and concatenate with rest of word (lowercase)
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

console.log(capitalizeWords(string_2));

// time: O(n)
// space: O(n)

// b: using regex

function capitalizeWordsRegex(str) {
  if (!str || str.length === 0) return "";

  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log(capitalizeWordsRegex(string_2));

// time: O(n)
// space: O(n)

// ######################################################

// 3- Reverse words in a sentence

words = "hello, i'm cristiano ronaldo";

// a: with built-in
function reverseWords(str) {
  if (!str || str.trim().length === 0) return "";

  //   split by whitespace, reverse array, join with single space
  return str
    .trim() //remove leading / trailling spaces
    .split(/\s+/) //split by one or more spaces
    .reverse()
    .join(" ");
}

console.log(reverseWords(words));

// time: O(n)
// space: O(n)

// b: no built-in
function reverseWordsNoBuiltIn(str) {
  if (!str || str.trim().length === 0) return "";

  const words = str.trim().split(/\s+/);
  const reversed = [];

  //  iterate backwords through words array
  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }

  return reversed.join(" ");
}

console.log(reverseWordsNoBuiltIn(words));

// time: O(n)
// space: O(n)

// ######################################################

// 4- String compression (e.g., "aaa" → "a3")

string_4 = "aaaaaa bbbbbbb ccccc";

function compressString(str) {
  if (!str || str.length === 0) return "";
  if (str.length === 1) return str;

  let compressed = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    // if next char is the same, increment count
    if (i + 1 < str.length && str[i] === str[i + 1]) {
      count++;
    } else {
      // add char and count to result
      compressed += str[i];
      if (count > 1) {
        compressed += count;
      }
      count = 1; //reset count
    }
  }

  return compressed.length < str.length ? compressed : str;
}

console.log(compressString(string_4));

// time: O(n)
// space: O(n)
