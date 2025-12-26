import { indexOfSum } from "./functions.js";
import { sortColoredArray } from "./functions.js";

// Example usage:
// const arr = [2, 7, 11, 15, 17, 8];
// const target = 15;
// const result = indexOfSum(arr, target);
// console.log(result); // Output: [0, 1]

// const arr2 = [-2, -3.5, 2, -1, 7];
// const maxSum = maxSumSubString(arr2);

const colorArray = ['blue', 'red', 'white', 'red', 'blue', 'white'];
const sortedColors = sortColoredArray(colorArray);
console.log(sortedColors); // Output: ['red', 'red', 'white', 'white', 'blue', 'blue']
