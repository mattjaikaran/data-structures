import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.zigzag_conversion.solution import zigzag_conversion

assert zigzag_conversion("PAYPALISHIRING",3)=="PAHNAPLSIIGYIR"
assert zigzag_conversion("PAYPALISHIRING",4)=="PINALSIGYAHRPI"
print("PASS 03_strings/zigzag_conversion (py)")
