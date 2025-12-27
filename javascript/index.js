import { indexOfSum } from "./functions.js";
import { quadrupletsWithSumA } from "./functions.js";

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

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
const a = 18;
const quadruplets = quadrupletsWithSumA(arr3, a);
console.log(quadruplets);