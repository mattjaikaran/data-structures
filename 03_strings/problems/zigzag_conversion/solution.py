
def zigzag_conversion(s: str, num_rows: int) -> str:
    """🟡 Zigzag Conversion (LC #6)"""
    if num_rows==1 or num_rows>=len(s): return s
    rows=[[] for _ in range(num_rows)]; row=0; step=1
    for c in s:
        rows[row].append(c)
        if row==0: step=1
        elif row==num_rows-1: step=-1
        row+=step
    return ''.join(c for r in rows for c in r)
