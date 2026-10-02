

def remove_invalid_parentheses(s: str) -> list[str]:
    """🔴 Remove Invalid Parentheses (LC #301)"""
    result = set()
    min_removed = [float('inf')]

    def bt(i, left, right, removed, path):
        if i == len(s):
            if left == right:
                if removed < min_removed[0]:
                    min_removed[0] = removed; result.clear()
                if removed == min_removed[0]:
                    result.add(path)
            return
        c = s[i]
        if c not in '()':
            bt(i+1, left, right, removed, path+c)
        else:
            # skip this char (remove it)
            bt(i+1, left, right, removed+1, path)
            # keep this char
            if c == '(':
                bt(i+1, left+1, right, removed, path+c)
            elif right < left:  # only add ')' if it closes an open one
                bt(i+1, left, right+1, removed, path+c)

    bt(0, 0, 0, 0, '')
    return list(result)
