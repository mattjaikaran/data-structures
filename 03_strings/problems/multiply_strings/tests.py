import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.multiply_strings.solution import multiply_strings

assert multiply_strings("123","456")=="56088"
assert multiply_strings("2","3")=="6"
assert multiply_strings("0","0")=="0"
print("PASS 03_strings/multiply_strings (py)")
