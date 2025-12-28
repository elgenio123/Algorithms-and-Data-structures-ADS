# Given a string s of '(', ')' and lower case english letters. write a function to remove the minimum number if parenthesis such that the resulting parenthesis string is valid and retrun any valid string

Initialize a stack to keep track of the indices of opening parentheses '(' that haven't been matched yet.

Initialize a set or list to store the indices of parentheses that need to be removed (unmatched ones).

Iterate through each character in the string along with its index:

If the character is '(', push its index onto the stack.
If the character is ')', check if the stack is not empty:
If not empty, pop the top index from the stack (indicating a match).
If empty, add the current index to the removal set (unmatched closing parenthesis).
If the character is a lowercase letter, do nothing (it stays in the string).
After the iteration, any indices remaining in the stack are unmatched opening parentheses; add them to the removal set.

Build the resulting string by iterating through the original string and including only characters whose indices are not in the removal set.

Return the resulting string, which will have valid parentheses (balanced) with the minimum removals.