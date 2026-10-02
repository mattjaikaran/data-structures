import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.restore_ip_addresses.solution import restore_ip_addresses

ip = restore_ip_addresses("25525511135")
assert "255.255.11.135" in ip and "255.255.111.35" in ip
print("PASS 13_backtracking/restore_ip_addresses (py)")
