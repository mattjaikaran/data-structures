import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.int_to_roman.solution import int_to_roman

assert int_to_roman(1994)=="MCMXCIV" and int_to_roman(3)=="III"
print("PASS 03_strings/int_to_roman (py)")
