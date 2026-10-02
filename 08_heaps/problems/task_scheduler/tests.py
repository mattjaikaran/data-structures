import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.task_scheduler.solution import task_scheduler

assert task_scheduler(list("AAAAABCD"),2)==13
assert task_scheduler(list("AAABBB"),2)==8
print("PASS 08_heaps/task_scheduler (py)")
