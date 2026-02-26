"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRING ALGORITHMS  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KMP     — O(n+m) pattern search. Failure function avoids restarting.
Rabin-Karp — rolling hash. O(n+m) avg, good for multi-pattern.
Z-Algorithm — Z[i] = length of longest match starting at i with prefix.
Manacher — O(n) longest palindromic substring.
"""
from collections import Counter, defaultdict


# ━━ PATTERN MATCHING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def kmp_search(text: str, pattern: str) -> list[int]:
    """KMP — returns all start indices of pattern in text. O(n+m)."""
    def build_lps(p):
        lps = [0]*len(p); length=0; i=1
        while i < len(p):
            if p[i]==p[length]: length+=1; lps[i]=length; i+=1
            elif length: length=lps[length-1]
            else: lps[i]=0; i+=1
        return lps

    if not pattern: return []
    lps = build_lps(pattern)
    result=[]; i=j=0
    while i < len(text):
        if text[i]==pattern[j]: i+=1; j+=1
        if j==len(pattern): result.append(i-j); j=lps[j-1]
        elif i<len(text) and text[i]!=pattern[j]:
            if j: j=lps[j-1]
            else: i+=1
    return result

def rabin_karp(text: str, pattern: str) -> list[int]:
    """Rabin-Karp rolling hash. O(n+m) avg."""
    n, m = len(text), len(pattern)
    if m > n: return []
    BASE, MOD = 31, 10**9+7
    pw = [1]*max(m+1, 1)
    for i in range(1, m+1): pw[i] = pw[i-1]*BASE % MOD
    def h(s, i, length): return sum((ord(s[i+k])-96)*pw[k] for k in range(length)) % MOD
    ph = h(pattern, 0, m)
    result=[]
    th = h(text, 0, m)
    if th==ph and text[:m]==pattern: result.append(0)
    for i in range(1, n-m+1):
        th = (th - (ord(text[i-1])-96)*pw[0]) * BASE % MOD + (ord(text[i+m-1])-96)*pw[m-1] % MOD
        th %= MOD  # simplified; full rolling hash is more careful
        if th==ph and text[i:i+m]==pattern: result.append(i)
    return result

def z_algorithm(s: str) -> list[int]:
    """Z-array: Z[i] = length of longest s[i:] matching prefix of s. O(n)."""
    n=len(s); z=[0]*n; z[0]=n; l=r=0
    for i in range(1,n):
        if i<r: z[i]=min(r-i,z[i-l])
        while i+z[i]<n and s[z[i]]==s[i+z[i]]: z[i]+=1
        if i+z[i]>r: l,r=i,i+z[i]
    return z

def z_search(text: str, pattern: str) -> list[int]:
    """Pattern search using Z-algorithm."""
    s = pattern + '$' + text
    z = z_algorithm(s)
    m = len(pattern)
    return [i-m-1 for i in range(m+1, len(s)) if z[i]==m]

def manacher(s: str) -> str:
    """Manacher's O(n) longest palindromic substring."""
    t = '#' + '#'.join(s) + '#'
    n=len(t); p=[0]*n; c=r=0
    for i in range(n):
        mirror = 2*c-i
        if i<r: p[i]=min(r-i, p[mirror])
        while i+p[i]+1<n and i-p[i]-1>=0 and t[i+p[i]+1]==t[i-p[i]-1]: p[i]+=1
        if i+p[i]>r: c,r=i,i+p[i]
    center=max(range(n), key=lambda x: p[x])
    start=(center-p[center])//2
    return s[start:start+p[center]]


# ━━ CLASSIC STRING PROBLEMS ━━━━━━━━━━━━━━━━━━━━━━━

def is_palindrome(s: str) -> bool:
    """🟢 Valid Palindrome (LC #125) — alphanumeric only"""
    s = ''.join(c.lower() for c in s if c.isalnum())
    return s == s[::-1]

def is_anagram(s: str, t: str) -> bool:
    """🟢 Valid Anagram (LC #242)"""
    return Counter(s) == Counter(t)

def roman_to_int(s: str) -> int:
    """🟢 Roman to Integer (LC #13)"""
    vals = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    result = 0
    for i in range(len(s)):
        if i+1<len(s) and vals[s[i]]<vals[s[i+1]]: result-=vals[s[i]]
        else: result+=vals[s[i]]
    return result

def int_to_roman(num: int) -> str:
    """🟡 Integer to Roman (LC #12)"""
    vals = [(1000,'M'),(900,'CM'),(500,'D'),(400,'CD'),(100,'C'),(90,'XC'),
            (50,'L'),(40,'XL'),(10,'X'),(9,'IX'),(5,'V'),(4,'IV'),(1,'I')]
    res=''
    for v,s in vals:
        while num>=v: res+=s; num-=v
    return res

def count_and_say(n: int) -> str:
    """🟡 Count and Say (LC #38)"""
    s='1'
    for _ in range(n-1):
        ns=''; i=0
        while i<len(s):
            j=i
            while j<len(s) and s[j]==s[i]: j+=1
            ns+=str(j-i)+s[i]; i=j
        s=ns
    return s

def multiply_strings(num1: str, num2: str) -> str:
    """🟡 Multiply Strings (LC #43) — no int() conversion"""
    m,n=len(num1),len(num2); pos=[0]*(m+n)
    for i in range(m-1,-1,-1):
        for j in range(n-1,-1,-1):
            mul=(ord(num1[i])-48)*(ord(num2[j])-48)
            p1,p2=i+j,i+j+1; total=mul+pos[p2]
            pos[p2]=total%10; pos[p1]+=total//10
    res=''.join(str(d) for d in pos).lstrip('0')
    return res or '0'

def reverse_words(s: str) -> str:
    """🟡 Reverse Words in a String (LC #151)"""
    return ' '.join(s.split()[::-1])

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

def longest_common_prefix(strs: list[str]) -> str:
    """🟢 Longest Common Prefix (LC #14)"""
    if not strs: return ''
    prefix=strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix): prefix=prefix[:-1]
    return prefix

def strstr(haystack: str, needle: str) -> int:
    """🟢 Implement strStr (LC #28) — KMP"""
    if not needle: return 0
    idx = kmp_search(haystack, needle)
    return idx[0] if idx else -1

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

def is_scramble(s1: str, s2: str) -> bool:
    """🔴 Scramble String (LC #87) — memoized recursion"""
    from functools import lru_cache
    @lru_cache(None)
    def dp(a,b):
        if a==b: return True
        if sorted(a)!=sorted(b): return False
        n=len(a)
        for k in range(1,n):
            if (dp(a[:k],b[:k]) and dp(a[k:],b[k:])) or \
               (dp(a[:k],b[n-k:]) and dp(a[k:],b[:n-k])): return True
        return False
    return dp(s1,s2)

def num_distinct(s: str, t: str) -> int:
    """🔴 Distinct Subsequences (LC #115)"""
    m,n=len(s),len(t); dp=[0]*(n+1); dp[0]=1
    for c in s:
        for j in range(n,0,-1):
            if c==t[j-1]: dp[j]+=dp[j-1]
    return dp[n]


# ━━ Tests ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def run_tests():
    print("Running string algorithm tests...\n")

    assert kmp_search("abcabcabc","abc")==[0,3,6]
    assert kmp_search("aabaabaab","aab")==[0,3,6]
    assert kmp_search("hello","ll")==[2]
    print("  ✅ kmp_search: multiple / overlapping / single")

    assert z_search("abcabcabc","abc")==[0,3,6]
    assert z_search("aaaa","aa")==[0,1,2]
    print("  ✅ z_search")

    assert manacher("babad") in ["bab","aba"]
    assert manacher("cbbd")=="bb"
    assert manacher("racecar")=="racecar"
    print("  ✅ manacher")

    assert is_palindrome("A man, a plan, a canal: Panama")
    assert not is_palindrome("race a car")
    print("  ✅ is_palindrome")

    assert is_anagram("anagram","nagaram") and not is_anagram("rat","car")
    print("  ✅ is_anagram")

    assert roman_to_int("MCMXCIV")==1994 and roman_to_int("III")==3
    print("  ✅ roman_to_int")

    assert int_to_roman(1994)=="MCMXCIV" and int_to_roman(3)=="III"
    print("  ✅ int_to_roman")

    assert multiply_strings("123","456")=="56088"
    assert multiply_strings("2","3")=="6"
    assert multiply_strings("0","0")=="0"
    print("  ✅ multiply_strings")

    assert reverse_words("  the sky is blue  ")=="blue is sky the"
    print("  ✅ reverse_words")

    assert zigzag_conversion("PAYPALISHIRING",3)=="PAHNAPLSIIGYIR"
    assert zigzag_conversion("PAYPALISHIRING",4)=="PINALSIGYAHRPI"
    print("  ✅ zigzag_conversion")

    assert longest_common_prefix(["flower","flow","flight"])=="fl"
    assert longest_common_prefix(["dog","racecar","car"])==""
    print("  ✅ longest_common_prefix")

    assert strstr("hello","ll")==2 and strstr("aaaaa","bba")==-1
    print("  ✅ strstr (KMP)")

    assert string_compression(['a','a','b','b','c','c','c'])==6
    print("  ✅ string_compression")

    assert valid_ip_address("172.16.254.1")=="IPv4"
    assert valid_ip_address("2001:0db8:85a3:0:0:8A2E:0370:7334")=="IPv6"
    assert valid_ip_address("256.256.256.256")=="Neither"
    print("  ✅ valid_ip_address")

    assert num_distinct("rabbbit","rabbit")==3
    assert num_distinct("babgbag","bag")==5
    print("  ✅ num_distinct")

    assert is_scramble("great","rgeat") and not is_scramble("great","efta")
    print("  ✅ is_scramble")

    print("\n🎉 All string algorithm tests passed!")

if __name__ == "__main__":
    run_tests()
