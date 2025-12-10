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
