# Given an interger array nums of unique elements. return the power set freed from duplicated sets. The solution can be returned in any other

1. Define a recursive function that takes the current index and the current subset built so far.
2. If the current index equals the array length, add a copy of the current subset to the result list.
3. Otherwise, skip the current element and recurse with the next index.
4. Then, include the current element in the subset, recurse with the next index, and backtrack by removing it.
5. Start the recursion with index 0 and an empty subset, then return the result list containing all subsets.