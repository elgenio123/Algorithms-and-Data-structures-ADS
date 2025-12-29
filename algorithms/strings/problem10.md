# Given two strings s and t of lengths m and n respectively, return the minimum window. Return empty if no such window was found

Idea 

1. Use a sliding window approach with two pointers to find the smallest substring in s that contains all characters of t.
2. Maintain a frequency count of characters needed from t and a counter for how many unique characters are fully matched.
3. Expand the right pointer to include more characters from s, updating the frequency and match counter.
4. When all characters of t are covered, shrink the left pointer to minimize the window while keeping the coverage.
5. Track the minimum window length and starting index, returning the substring or empty if no valid window is found.