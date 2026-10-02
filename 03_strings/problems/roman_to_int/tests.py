import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.roman_to_int.solution import roman_to_int

assert roman_to_int("MCMXCIV")==1994 and roman_to_int("III")==3
print("PASS 03_strings/roman_to_int (py)")
