# Given the head of a sinlgle linked list,reverse the list and return the reversed list

1. Initialize three pointers: previous as null, current as head, and next to store the next node.
2. Traverse the list while current is not null, updating next to current's next node.
3. Set current's next to previous, effectively reversing the link.
4. Move previous to current and current to next for the next iteration.
5. After traversal, previous will be the new head of the reversed list, so return it.