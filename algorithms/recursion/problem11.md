# Day 11
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