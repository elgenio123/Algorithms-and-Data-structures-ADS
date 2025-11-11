#Problem 1
def index_of_sum(l, a):
    for i in range(len(l)):
        for j in range(i+1, len(l)):
            if l[i] + l[j] == a:
                return i, j
    return None
