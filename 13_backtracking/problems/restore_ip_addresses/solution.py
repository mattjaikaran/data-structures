

def restore_ip_addresses(s: str) -> list[str]:
    """🟡 Restore IP Addresses (LC #93)"""
    result = []
    def bt(start, parts):
        if len(parts) == 4:
            if start == len(s): result.append('.'.join(parts))
            return
        for length in range(1, 4):
            if start + length > len(s): break
            segment = s[start:start+length]
            if len(segment) > 1 and segment[0] == '0': break  # leading zero
            if int(segment) > 255: break
            parts.append(segment)
            bt(start + length, parts)
            parts.pop()
    bt(0, [])
    return result
