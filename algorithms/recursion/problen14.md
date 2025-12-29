# Given n pairs of parenthesis, write a function to geneate all combinations of well formed parenthesis

1. Use backtracking to build valid parentheses combinations by tracking the number of open and close parentheses used.
2. Start with zero open and zero close, and an empty string.
3. If the number of open parentheses is less than n, add an opening parenthesis and recurse.
4. If the number of close parentheses is less than open, add a closing parenthesis and recurse.
5. When the total length reaches 2n, add the current string to the result list.