import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.partition_labels.solution import partition_labels

assert partition_labels("ababcbacadefegdehijhklij") == [9,7,8]
print("PASS 14_greedy/partition_labels (py)")
