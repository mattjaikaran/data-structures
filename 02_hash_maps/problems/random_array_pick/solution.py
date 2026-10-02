from collections import defaultdict
import random


class RandomArrayPick:
    def __init__(self, nums: list[int]) -> None:
        self.indices: dict[int, list[int]] = defaultdict(list)
        for index, value in enumerate(nums):
            self.indices[value].append(index)

    def pick(self, target: int) -> int:
        return random.choice(self.indices[target])
