import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.singly_linked_list.solution import from_list, to_list
from problems.reverse_between.solution import reverse_between
head = from_list([1,2,3,4,5])
nodes, current = [], head
while current:
    nodes.append(current)
    current = current.next
current = reverse_between(head, 2, 4)
for index in [0,3,2,1,4]:
    assert current is nodes[index]
    current = current.next
assert current is None
assert to_list(reverse_between(from_list([1,2,3]),1,3)) == [3,2,1]
single = from_list([1])
assert reverse_between(single,1,1) is single
print('PASS 04_linked_lists/reverse_between (py)')
