# Given the head of a linked list and an integer val, remove all the nodes of the list that has Node.val==val and return the new head
type Node = record
            val: integer
            next: Node
function reomve_val(Node n, int val)
begin 

if val == n.val then
    next_node = n.next
    delete(n)
return reomve_val(n.next, val)
end