import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.word_ladder.solution import word_ladder

assert word_ladder("hit","cog",["hot","dot","dog","lot","log","cog"]) == 5
print("PASS 10_graphs/word_ladder (py)")
