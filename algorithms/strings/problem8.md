# Given two strings, return true if one contains a permutation of the other

idea: Reverse the smaller string and check if it is contained in the bigger one. 

To check if one string is found in another, loop through the longest string till you find the first element of the second string. Check if the rest of the characters of both strings corresponds. 