import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.binary_search.solution import binary_search
from problems.move_zeroes.solution import move_zeroes
from fundamentals.rotate_right.solution import rotate_right

arr = [1, 3, 5, 7, 9, 11, 13]
assert binary_search(arr, 7) == 3
assert binary_search(arr, 1) == 0
assert binary_search(arr, 13) == 6
assert binary_search(arr, 6) == -1
assert binary_search(arr, 0) == -1
arr = [0, 1, 0, 3, 12]
move_zeroes(arr)
assert arr == [1, 3, 12, 0, 0]
arr2 = [0]
move_zeroes(arr2)
assert arr2 == [0]
arr = [1, 2, 3, 4, 5]
rotate_right(arr, 2)
assert arr == [4, 5, 1, 2, 3]
arr2 = [1, 2, 3]
rotate_right(arr2, 4)
assert arr2 == [3, 1, 2]
print("PASS 01_arrays/move_zeroes (py)")
