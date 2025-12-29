from functions import get_non_overlapping_intervals, sort_colored_array, Colors

# l = [-2, -3.5, 2, -1, 7]

# print(max_sum_sub_string(l))

# l = [Colors.blue, Colors.red, Colors.white, Colors.red, Colors.blue, Colors.white]
# val = sort_colored_array(l)
# print(val)

# l = [1, 2, 3, 4, 5, 6, 7, 8]
# a = 18
# print(quadruplets_with_sum_a(l, a))

# l = [[1, 3], [2, 4], [5, 7], [6, 8], [9, 10]]
# print(get_non_overlapping_intervals(l))

# s = "(we(lco(me)) to (the) py(th(o(n) wo(rld)))"
# from functions import remove_un_matched_parentheses
# print(remove_un_matched_parentheses(s))

# string = "aadvefhaaaqeaabdveef"
# from functions import sort_highest_number_of_occurrences
# print(sort_highest_number_of_occurrences(string))

# str1 = "abcde"
# str2 = "edc"
# from functions import check_reversed_str2_in_str1   
# print(check_reversed_str2_in_str1(str1, str2))

# s = "ressasser"
# from functions import get_palindromic_substrings
# print(get_palindromic_substrings(s))

# s = "reshelloasser"
# t = "shla"
# from functions import minimum_window_substring
# print(minimum_window_substring(s, t))


# class ListNode:
#     def __init__(self, value=0, next=None):
#         self.value = value
#         self.next = next
# head = ListNode(1)
# head.next = ListNode(2)
# head.next.next = ListNode(3)
# head.next.next.next = ListNode(4)
# head.next.next.next.next = ListNode(5)
# val = reverse_linked_list(head)

# while val:
#     print(val.value)
#     val = val.next

# arr = [1, 2, 3, 4, 5]
# print(powerset_recursive_on_integers(arr))

from functions import get_all_well_formed_parentheses
n = 5
print(get_all_well_formed_parentheses(n))