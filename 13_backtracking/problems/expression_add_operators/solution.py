

def expression_add_operators(num: str, target: int) -> list[str]:
    """🔴 Expression Add Operators (LC #282)"""
    result = []
    def bt(i, path, val, last):
        if i == len(num):
            if val == target: result.append(path)
            return
        for j in range(i, len(num)):
            seg = num[i:j+1]
            if len(seg) > 1 and seg[0] == '0': break  # no leading zeros
            n = int(seg)
            if i == 0:
                bt(j+1, seg, n, n)
            else:
                bt(j+1, path+'+'+seg, val+n, n)
                bt(j+1, path+'-'+seg, val-n, -n)
                bt(j+1, path+'*'+seg, val-last+last*n, last*n)
    bt(0, '', 0, 0)
    return result
