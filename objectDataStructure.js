// Object & Data Structure Challenges

// ############################################

// 1- Deep clone an object
// a: recrusive way
// function deepClone(obj) {
//   // handle null & undefined
//   if (obj === null || obj === undefined) return obj;

//   // handle primitive types (number, string, boolena)
//   if (typeof obj !== "object") return obj;

//   // handle date objects
//   if (obj instanceof Date) return new Date(obj.getTime());

//   // handle regEcp objects
//   if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

//   // handle arrays
//   if (Array.isArray(obj)) {
//     const arrCopy = [];
//     for (let i = 0; i < obj.length; i++) {
//       arrCopy[i] = deepClone(obj[i]);
//     }

//     return arrCopy;
//   }

//   // handle objects
//   const objCopy = {};
//   for (let key in obj) {
//     // only clone own properties (not inherited)
//     if (obj.hasOwnProperty(key)) {
//       objCopy[key] = deepClone(obj[key]);
//     }
//   }

//   return objCopy;
// }

// // b: modern way
// function deepCloneModern(obj) {
//   // Edge case: null or undefined
//   if (obj === null || obj === undefined) return obj;
//   // native deep clone (supports most types except functions and sympols)
//   // available in modern browsers and node.js 17+
//   try {
//     return structuredClone(obj);
//   } catch (e) {
//     // fallback to manual implementation
//     return deepClone(obj);
//   }
// }

// const original = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     zip: 10001,
//   },
//   hobbies: ["reading", "gaming"],
//   birthDate: new Date("1990-01-01"),
//   pattern: /test/gi,
// };

// console.log(deepClone(original));
// console.log(deepCloneModern(original));

// ############################################

// 2- Flatten a nested object

// a:
// function flatenObject(obj, prefix = "", result = {}) {
//   if (obj === null || obj === undefined) return result;

//   //   iterate through all keys in object
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       // create the new key with dot notation
//       const newKey = prefix ? `${prefix}.${key}` : key;

//       //   if value is an object (not array, not null), recurse
//       if (
//         typeof obj[key] === "object" &&
//         obj[key] !== null &&
//         !Array.isArray(obj[key]) &&
//         !(obj[key] instanceof Date) &&
//         !(obj[key] instanceof RegExp)
//       ) {
//         flatenObject(obj[key], newKey, result);
//       } else {
//         // It's a primitive, array, or special object - add to result
//         result[newKey] = obj[key];
//       }
//     }
//   }
//   return result;
// }

// b: avoid recrusion depth issue (iterative approach)
// function flatenObjectAlt(obj) {
//   if (obj === null || obj === undefined) return {};

//   const result = {};
//   const stack = [{ value: obj, prefix: "" }];

//   while (stack.length > 0) {
//     const { value, prefix } = stack.pop();

//     for (let key in value) {
//       if (value.hasOwnProperty(key)) {
//         const newKey = prefix ? `${prefix}.${key}` : key;

//         if (
//           typeof value[key] === "object" &&
//           value[key] !== null &&
//           !Array.isArray(value[key]) &&
//           !(value[key] instanceof Date) &&
//           !(value[key] instanceof RegExp)
//         ) {
//           stack.push({ value: value[key], prefix: newKey });
//         } else {
//           result[newKey] = value[key];
//         }
//       }
//     }
//   }
//   return result;
// }

// const nestObj = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     zip: 10001,
//     coordinates: {
//       lat: 40.7128,
//       lng: -74.006,
//     },
//   },
//   hobbies: ["reading", "gaming"],
//   job: {
//     title: "Developer",
//     company: {
//       name: "TechCorp",
//       location: "USA",
//     },
//   },
// };

// console.log(flatenObject(nestObj));
// console.log(flatenObjectAlt(nestObj));

// ############################################

// 4- Compare two objects for equality

// const obj1 = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     zip: 10001,
//   },
//   hobbies: ["reading", "gaming"],
// };

// const obj2 = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     zip: 10001,
//   },
//   hobbies: ["reading", "gaming"],
// };

// const obj3 = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "Los Angeles",
//     zip: 90001,
//   },
//   hobbies: ["reading", "gaming"],
// };

// function deepEqual(obj1, obj2) {
//   // Check if both are the same reference
//   if (obj1 === obj2) return true;

//   // Check if either is null or undefined
//   if (
//     obj1 === null ||
//     obj2 === null ||
//     obj1 === undefined ||
//     obj2 === undefined
//   ) {
//     return obj1 === obj2;
//   }

//   //   check if types are different
//   if (typeof obj1 !== typeof obj2) return false;

//   // handle primitve types
//   if (typeof obj1 !== "object") return obj1 === obj2;

//   //   handle date objects
//   if (obj1 instanceof Date && obj2 instanceof Date) {
//     return obj1.getTime() === obj2.getTime();
//   }

//   //   handle regExp objects
//   if (obj1 instanceof RegExp && obj2 instanceof RegExp) {
//     return obj1.toString() === obj2.toString();
//   }

//   //   handle arrays
//   if (Array.isArray(obj1) && Array.isArray(obj2)) {
//     if (obj1.length !== obj2.length) return false;

//     for (let i = 0; i < obj1.length; i++) {
//       if (!deepEqual(obj1[i], obj2[i])) return false;
//     }

//     return true;
//   }

//   //   handle one being array and other not
//   if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;

//   // handle objects
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   // check if they have the same number of keys
//   if (keys1.length !== keys2.length) return false;

//   // check if all keys and values are equal
//   for (let key of keys1) {
//     // check if key exists in obj2
//     if (!obj2.hasOwnProperty(key)) return false;

//     // recrusively compare value
//     if (!deepEqual(obj1[key], obj2[key])) return false;
//   }

//   return true;
// }

// console.log(deepEqual(obj1, obj2));
// console.log(deepEqual(obj1, obj3));
// console.log(deepEqual(obj2, obj3));

// ############################################

// 5- Group objects by property

// const users = [
//   { name: "Alice", age: 25, department: "Engineering" },
//   { name: "Bob", age: 30, department: "Marketing" },
//   { name: "Charlie", age: 25, department: "Engineering" },
//   { name: "David", age: 30, department: "Sales" },
//   { name: "Eve", age: 25, department: "Marketing" },
// ];

// // helper function
// function getNestedProperty(obj, path) {
//   if (!path) return undefined;

//   const keys = path.split(".");
//   let value = obj;

//   for (let key of keys) {
//     if (value === null || value === undefined) return undefined;
//     value = value[key];
//   }

//   return value;
// }

// // main function
// function groupByReduce(array, property) {
//   if (!array || array.length === 0) return {};

//   return array.reduce((grouped, obj) => {
//     const key =
//       typeof property === "function"
//         ? property(obj)
//         : getNestedProperty(obj, property);

//     const keyStr = String(key);

//     if (!grouped[keyStr]) {
//       grouped[keyStr] = [];
//     }

//     grouped[keyStr].push(obj);
//     return grouped;
//   }, {});
// }

// console.log(groupByReduce(users, "department"));
