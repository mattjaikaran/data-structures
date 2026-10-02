import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.eval_rpn.solution import eval_rpn

assert eval_rpn(["2","1","+","3","*"]) == 9
assert eval_rpn(["4","13","5","/","+"]) == 6
assert eval_rpn(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]) == 22
print("PASS 05_stacks_queues/eval_rpn (py)")
