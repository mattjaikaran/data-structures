import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.asteroid_collision.solution import asteroid_collision

assert asteroid_collision([5,10,-5]) == [5,10]
assert asteroid_collision([8,-8]) == []
assert asteroid_collision([10,2,-5]) == [10]
assert asteroid_collision([-2,-1,1,2]) == [-2,-1,1,2]
print("PASS 05_stacks_queues/asteroid_collision (py)")
