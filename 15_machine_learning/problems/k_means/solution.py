from math import fsum

def k_means(points: list[list[float]], initial_centers: list[list[float]], max_steps: int = 100, tolerance: float = 1e-6) -> tuple[list[list[float]], list[int]]:
    if not points or not points[0] or not initial_centers or max_steps < 1 or tolerance < 0:
        raise ValueError('Invalid clustering inputs')
    width = len(points[0])
    if any(len(row) != width for row in points + initial_centers):
        raise ValueError('Feature dimensions differ')
    centers = [row[:] for row in initial_centers]
    def distance(a: list[float], b: list[float]) -> float:
        return fsum((x-y)**2 for x,y in zip(a,b))
    def assign() -> list[int]:
        return [min(range(len(centers)), key=lambda i: distance(point,centers[i])) for point in points]
    for _ in range(max_steps):
        labels = assign()
        counts = [0] * len(centers)
        sums = [[0.0] * width for _ in centers]
        for point,label in zip(points,labels):
            counts[label] += 1
            for column,value in enumerate(point):
                sums[label][column] += value
        updated = [[value/counts[i] for value in sums[i]] if counts[i] else centers[i][:] for i in range(len(centers))]
        movement = max(distance(old,new) for old,new in zip(centers,updated))
        centers = updated
        if movement <= tolerance**2:
            break
    return centers, assign()
