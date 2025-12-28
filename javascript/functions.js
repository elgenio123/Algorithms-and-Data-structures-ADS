

// Problem 1
function indexOfSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}

export { indexOfSum };

// Problem 2
function maxSumSubString(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

export { maxSumSubString };

// Problem 3
function sortColoredArray(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 'red') {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 'white') {
            mid++;
        } else { // arr[mid] === 'blue'
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}

export { sortColoredArray };

// Problem 4
function quadrupletsWithSumA(arr, a) {
    const result = [];
    const n = arr.length;

    for (let i = 0; i < n - 3; i++) {
        for (let j = i + 1; j < n - 2; j++) {
            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = arr[i] + arr[j] + arr[left] + arr[right];
                if (sum === a) {
                    result.push([arr[i], arr[j], arr[left], arr[right]]);
                    left++;
                    right--;
                } else if (sum < a) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

export { quadrupletsWithSumA };

// problem 5
function getNonOverlappingIntervals(intervals) {
    if (intervals.length === 0) return [];

    // Sort intervals based on the end time
    intervals.sort((a, b) => a[1] - b[1]);

    const result = [];
    let lastEndTime = -Infinity;

    for (const interval of intervals) {
        if (interval[0] >= lastEndTime) {
            result.push(interval);
            lastEndTime = interval[1];
        }
    }

    return result;
}

export { getNonOverlappingIntervals };

// problem 6
function removeUnMatchedParentheses(s) {
    const stack = [];
    const toRemove = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                toRemove.add(i);
            }
        }
    }

    while (stack.length > 0) {
        toRemove.add(stack.pop());
    }

    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!toRemove.has(i)) {
            result += s[i];
        }
    }

    return result;
}

export { removeUnMatchedParentheses };