# Given a sring s, partition s such that every substring of s is a palindrome. Return all possible palindrome partition of s

Idea 

1 - Create a helper function to check if a substring s[i..j] is a palindrome.
2 - Define a backtracking function that takes the current start index and the current partition list.
3 - In the function, if start equals string length, add the partition to results.
4- Otherwise, loop from start to end of string: if substring to current end is palindrome, append it, recurse with new start, then backtrack by popping.
5- Call the backtracking function with start=0 and empty partition, then return the results.