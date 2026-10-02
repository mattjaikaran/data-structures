from dataclasses import dataclass
from math import sqrt
from fundamentals.descriptive_statistics.solution import mean_variance

@dataclass(frozen=True)
class StandardScaler:
    means: tuple[float, ...]
    scales: tuple[float, ...]

    @classmethod
    def fit(cls, rows: list[list[float]]) -> 'StandardScaler':
        if not rows or not rows[0] or any(len(row) != len(rows[0]) for row in rows):
            raise ValueError('Require nonempty rectangular training data')
        statistics = [mean_variance(list(column)) for column in zip(*rows)]
        return cls(tuple(mean for mean, _ in statistics),
                   tuple(sqrt(variance) if variance > 0 else 1.0 for _, variance in statistics))

    def transform(self, rows: list[list[float]]) -> list[list[float]]:
        if any(len(row) != len(self.means) for row in rows):
            raise ValueError('Feature dimensions differ')
        return [[(value - mean) / scale for value, mean, scale in zip(row, self.means, self.scales)] for row in rows]
