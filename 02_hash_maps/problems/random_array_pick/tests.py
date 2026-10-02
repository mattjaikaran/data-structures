import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.random_array_pick.solution import random_array_pick

from unittest.mock import patch
with patch("random.choice", side_effect=lambda indices: indices[-1]):
    picker = random_array_pick([8, 3, 8])
    assert picker.pick(8) == 2
    assert picker.pick(3) == 1
print("PASS 02_hash_maps/random_array_pick (py)")
