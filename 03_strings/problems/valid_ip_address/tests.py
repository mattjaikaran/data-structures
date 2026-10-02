import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.valid_ip_address.solution import valid_ip_address

assert valid_ip_address("172.16.254.1")=="IPv4"
assert valid_ip_address("2001:0db8:85a3:0:0:8A2E:0370:7334")=="IPv6"
assert valid_ip_address("256.256.256.256")=="Neither"
print("PASS 03_strings/valid_ip_address (py)")
