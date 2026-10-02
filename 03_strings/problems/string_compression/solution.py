
def string_compression(chars: list[str]) -> int:
    """🟡 String Compression (LC #443) — in-place"""
    write=anchor=0
    for read in range(len(chars)):
        if read+1==len(chars) or chars[read+1]!=chars[read]:
            chars[write]=chars[anchor]; write+=1
            count=read-anchor+1
            if count>1:
                for c in str(count): chars[write]=c; write+=1
            anchor=read+1
    return write
