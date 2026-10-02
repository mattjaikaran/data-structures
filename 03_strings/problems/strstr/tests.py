import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.strstr.solution import strstr

assert strstr("hello","ll")==2 and strstr("aaaaa","bba")==-1
print("PASS 03_strings/strstr (py)")
