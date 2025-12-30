

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

// problem 7
function sortHighestNumberOfOccurrences(s) {
    const frequencyMap = new Map();

    for (const char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    const sortedChars = Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1]);

    let result = '';
    for (const [char, freq] of sortedChars) {
        result += char.repeat(freq);
    }

    return result;
}

export { sortHighestNumberOfOccurrences };

// problem 8
function checkReversedStr2InStr1(s1, s2) {
    const reversedS2 = s2.split('').reverse().join('');
    return s1.includes(reversedS2);
}

export { checkReversedStr2InStr1 };

// problem 9
function getPalindromicSubstrings(s) {
    const palindromes = new Set();

    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        let left = i, right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            palindromes.add(s.substring(left, right + 1));
            left--;
            right++;
        }

        // Even length palindromes
        left = i; right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            palindromes.add(s.substring(left, right + 1));
            left--;
            right++;
        }
    }
    //remove single character palindromes
    palindromes.forEach(p => {
        if (p.length < 2) {
            palindromes.delete(p);
        }
    });

    return Array.from(palindromes);
}

export { getPalindromicSubstrings };

// problem 10
function minimumWindowSubstring(s, t) {
    let tFreq = new Map();
    for (let char of t) {
        tFreq.set(char, (tFreq.get(char) || 0) + 1);
    }

    let left = 0, right = 0;
    let required = tFreq.size;
    let formed = 0;
    const windowCounts = new Map();
    let minLength = Infinity;
    let minWindow = "";

    while (right < s.length) {
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (tFreq.has(char) && windowCounts.get(char) === tFreq.get(char)) {
            formed++;
        }

        while (left <= right && formed === required) {
            char = s[left];

            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindow = s.substring(left, right + 1);
            }

            windowCounts.set(char, windowCounts.get(char) - 1);
            if (tFreq.has(char) && windowCounts.get(char) < tFreq.get(char)) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return minWindow;
}

export { minimumWindowSubstring };

// problem 11
function remmoveNodeLinkedList(head, node) {
    if (!head) return null;

    // If the node to be removed is the head
    if (head.value === node) {
        return head.next;
    }

    let current = head;
    while (current.next && current.next.value !== node) {
        current = current.next;
    }

    // If the node was found, remove it
    if (current.next) {
        current.next = current.next.next;
    }

    return head;
}

export { remmoveNodeLinkedList };

// problem 12
function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
}

export { reverseLinkedList };

// problem 13
function powerSetRecursiveInt(arr) {
    const result = [];

    function backtrack(start, path) {
        result.push([...path]);
        for (let i = start; i < arr.length; i++) {
            path.push(arr[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return result;
}

export { powerSetRecursiveInt };

// problem 14
function getAllWelFormedParentheses(n) {
    const result = [];

    function backtrack(s = '', left = 0, right = 0) {
        if (s.length === n * 2) {
            result.push(s);
            return;
        }

        if (left < n) {
            backtrack(s + '(', left + 1, right);
        }
        if (right < left) {
            backtrack(s + ')', left, right + 1);
        }
    }

    backtrack();
    return result;
}

export { getAllWelFormedParentheses };
