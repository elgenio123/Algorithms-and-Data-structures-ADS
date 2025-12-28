from enum import Enum

#Problem 1
def index_of_sum(l, a):
    for i in range(len(l)):
        for j in range(i+1, len(l)):
            if l[i] + l[j] == a:
                return i, j
    return None


#Problem 2
def max_sum_sub_string(l):
    max_sum = float('-inf')
    current_sum = 0

    for num in l:
        current_sum += num
        if current_sum > max_sum:
            max_sum = current_sum
        if current_sum < 0:
            current_sum = 0

    return max_sum

#Problem 3

class Colors(Enum):
    red = 0
    white = 1
    blue = 2

def sort_colored_array(array):


    for i in range(len(array)):
        for j in range(0, len(array)):
            if array[i].value < array[j].value:
                array[i], array[j] = array[j], array[i]
    return array

#Problem 4
def quadruplets_with_sum_a(l, a):
    quadruplets = []
    n = len(l)

    for i in range(n):
        for j in range(i + 1, n):
            for k in range(j + 1, n):
                for m in range(k + 1, n):
                    if l[i] + l[j] + l[k] + l[m] == a:
                        quadruplets.append((l[i], l[j], l[k], l[m]))

    return quadruplets

# problem 5
def get_non_overlapping_intervals(intervals):
    if not intervals:
        return []

    # Sort intervals based on the start time
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]

    for current in intervals[1:]:
        last_merged = merged[-1]
        if current[0] <= last_merged[1]:  # Overlap
            last_merged[1] = max(last_merged[1], current[1])  # Merge
        else:
            merged.append(current)

    return merged

# problem 6
def remove_un_matched_parentheses(s):
    stack = []
    to_remove = set()

    for i, char in enumerate(s):
        if char == '(':
            stack.append(i)
        elif char == ')':
            if stack:
                stack.pop()
            else:
                to_remove.add(i)

    to_remove = to_remove.union(set(stack))
    result = ''.join([char for i, char in enumerate(s) if i not in to_remove])

    return result

# problem 7
def sort_highest_number_of_occurrences(l):
    from collections import Counter

    count = Counter(l)
    return sorted(l, key=lambda x: (count[x], x), reverse=True)

#problem 8
def check_reversed_str2_in_str1(s1, s2):
    reversed_s2 = s2[::-1]
    return reversed_s2 in s1

# problem 9
def get_palindromic_substrings(s):
    palindromic_subs = []

    def is_palindrome(sub):
        return sub == sub[::-1]

    n = len(s)
    for i in range(n):
        for j in range(i + 1, n + 1):
            sub = s[i:j]
            if is_palindrome(sub):
                palindromic_subs.append(sub)
    
    # remove single character substrings if not needed
    palindromic_subs = [sub for sub in palindromic_subs if len(sub) > 1]

    return palindromic_subs