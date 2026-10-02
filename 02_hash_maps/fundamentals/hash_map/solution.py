
class HashMap:
    """Manual hash map using chaining for collision resolution."""
    def __init__(self, cap=16):
        self.cap = cap
        self.buckets: list[list] = [[] for _ in range(cap)]
        self.size = 0

    def _h(self, key): return hash(key) % self.cap

    def put(self, key, val):
        b = self.buckets[self._h(key)]
        for i,(k,v) in enumerate(b):
            if k==key: b[i]=(key,val); return
        b.append((key,val)); self.size+=1

    def get(self, key):
        for k,v in self.buckets[self._h(key)]:
            if k==key: return v
        return -1

    def remove(self, key):
        b = self.buckets[self._h(key)]
        for i,(k,v) in enumerate(b):
            if k==key: b.pop(i); self.size-=1; return
