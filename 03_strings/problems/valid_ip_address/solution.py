
def valid_ip_address(ip: str) -> str:
    """🟡 Validate IP Address (LC #468)"""
    def is_ipv4(s):
        parts=s.split('.')
        if len(parts)!=4: return False
        for p in parts:
            if not p or len(p)>3 or (len(p)>1 and p[0]=='0'): return False
            if not p.isdigit() or not 0<=int(p)<=255: return False
        return True
    def is_ipv6(s):
        parts=s.split(':')
        if len(parts)!=8: return False
        hex_chars=set('0123456789abcdefABCDEF')
        for p in parts:
            if not 1<=len(p)<=4 or not all(c in hex_chars for c in p): return False
        return True
    if is_ipv4(ip): return 'IPv4'
    if is_ipv6(ip): return 'IPv6'
    return 'Neither'
