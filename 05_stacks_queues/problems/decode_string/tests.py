import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.decode_string.solution import decode_string

assert decode_string("3[a]2[bc]") == "aaabcbc"
assert decode_string("3[a2[c]]") == "accaccacc"
assert decode_string("2[abc]3[cd]ef") == "abcabccdcdcdef"
print("PASS 05_stacks_queues/decode_string (py)")
