from fundamentals.vector_operations.solution import dot

def matrix_multiply(a: list[list[float]], b: list[list[float]]) -> list[list[float]]:
    if not a or not b or not a[0] or not b[0]:
        raise ValueError('Matrices must be nonempty')
    if any(len(row) != len(a[0]) for row in a) or any(len(row) != len(b[0]) for row in b):
        raise ValueError('Matrices must be rectangular')
    if len(a[0]) != len(b):
        raise ValueError('Inner dimensions differ')
    columns = [list(column) for column in zip(*b)]
    return [[dot(row, column) for column in columns] for row in a]
