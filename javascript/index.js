
// Example usage:
// const arr = [2, 7, 11, 15, 17, 8];
// const target = 15;
// const result = indexOfSum(arr, target);
// console.log(result); // Output: [0, 1]

// const arr2 = [-2, -3.5, 2, -1, 7];
// const maxSum = maxSumSubString(arr2);

// const colorArray = ['blue', 'red', 'white', 'red', 'blue', 'white'];
// const sortedColors = sortColoredArray(colorArray);
// console.log(sortedColors); 

// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
// const a = 18;
// const quadruplets = quadrupletsWithSumA(arr3, a);
// console.log(quadruplets);

// const intervals = [[1, 3], [2, 4], [5, 7], [6, 8], [9, 10]];

// const nonOverlapping = getNonOverlappingIntervals(intervals);
// console.log(nonOverlapping);

// import { removeUnMatchedParentheses } from "./functions.js";

// const s = "(we())lco(me)) to (the) java((scr(pt( wo())rld)))";
// const cleanedString = removeUnMatchedParentheses(s);
// console.log(cleanedString);

// import { sortHighestNumberOfOccurrences } from "./functions.js";

// const string = "aadvefhaaaqeaabdveef";
// const sortedString = sortHighestNumberOfOccurrences(string);
// console.log(sortedString);

// import { checkReversedStr2InStr1 } from "./functions.js";

// const str1 = "abcde";
// const str2 = "edb";
// const containsReversed = checkReversedStr2InStr1(str1, str2);
// console.log(containsReversed);

// const str1 = "hollo";
// console.log(getPalindromicSubstrings(str1));

// let s = "I love javascript";
// console.log(minimumWindowSubstring(s, "love javs"));

import { getAllWelFormedParentheses } from "./functions.js";

// // test linked list removal
// const head = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// const reversedList = reverseLinkedList(head);
// let current = reversedList;
// while (current) {
//     console.log(current.value); 
//     current = current.next;
// }

// let t = [1, 2, 3, 4, 5];
// const result = powerSetRecursiveInt(t);
// console.log(result);

let n = 5;
const result = getAllWelFormedParentheses(n);
console.log(result);