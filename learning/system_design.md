# System Design Interview Guide
### How to approach open-ended architecture questions

System design interviews test whether you can think like a senior engineer.
There's no single correct answer — you're being evaluated on your **reasoning process**.

---

## The Framework (Use This Every Time)

### 1. Clarify Requirements (5 min)
Never start designing without asking:
- **Scale**: How many users? DAU? QPS?
- **Features**: What's MVP vs nice-to-have?
- **Constraints**: Latency requirements? Consistency vs availability?
- **Read/write ratio**: Heavy reads? Heavy writes? Both?

### 2. Estimate Scale (3 min)
Back-of-envelope numbers to size your system:
- 1M DAU × 10 requests/day = **~100 QPS**
- 100M DAU × 10 requests/day = **~10,000 QPS**
- 10KB per request at 10K QPS = **~100 MB/s** throughput
- 1 server handles ~1,000 QPS (rough rule)
- 1TB SSD reads at ~500MB/s

### 3. High-Level Design (10 min)
Draw the boxes: client → load balancer → servers → database.
Identify the core services. Keep it simple first.

### 4. Deep Dive (15 min)
Interviewer will ask you to go deep on specific components.
This is where you show knowledge of actual systems.

### 5. Identify Bottlenecks & Tradeoffs (5 min)
- Where does this fail at 10x scale?
- What did you sacrifice (consistency? latency? cost)?
- How would you monitor it?

---

## Core Concepts to Know Cold

### Horizontal vs Vertical Scaling
- **Vertical**: bigger machine. Simple, has limits, single point of failure.
- **Horizontal**: more machines. Complex, theoretically unlimited, needs load balancer.

### CAP Theorem
A distributed system can guarantee at most 2 of 3:
- **Consistency**: every read gets the most recent write
- **Availability**: every request gets a response (maybe stale)
- **Partition Tolerance**: system works despite network partitions

In practice: network partitions happen, so you choose **CP** or **AP**.
- CP: banks, transactions (consistency critical)
- AP: social media, DNS (availability critical, stale is OK)

### ACID vs BASE
| ACID (SQL) | BASE (NoSQL) |
|-----------|-------------|
| Atomicity | Basically Available |
| Consistency | Soft state |
| Isolation | Eventually consistent |
| Durability | |

### Latency Numbers Every Engineer Should Know
| Operation | Latency |
|-----------|---------|
| L1 cache reference | 0.5 ns |
| L2 cache reference | 7 ns |
| RAM reference | 100 ns |
| SSD random read | 150 μs |
| HDD seek | 10 ms |
| Network round trip (same DC) | 500 μs |
| Network round trip (cross-continent) | 150 ms |

---

## The Toolkit — Know These Systems

### Load Balancers
- **L4 (transport layer)**: routes by IP/TCP. Fast, less intelligent.
- **L7 (application layer)**: routes by URL, headers, cookies. Can do SSL termination, sticky sessions.
- **Algorithms**: Round-robin, least connections, consistent hashing, IP hash.
- **Tools**: Nginx, HAProxy, AWS ALB/ELB.

### Databases

**SQL (PostgreSQL, MySQL)**
- ACID transactions. Joins. Schema-enforced.
- Scale reads with **read replicas**.
- Scale writes with **sharding** (horizontal partition by key).
- Vertical sharding = splitting tables across databases.

**NoSQL Types:**
| Type | Examples | Best For |
|------|---------|---------|
| Document | MongoDB, DynamoDB | User profiles, catalogs |
| Key-Value | Redis, Memcached | Caching, sessions |
| Column | Cassandra, HBase | Time-series, IoT data |
| Graph | Neo4j | Social graphs, recommendations |

**When to use NoSQL:**
- Need to scale writes massively
- Schema changes frequently
- Denormalized data is acceptable
- Simple access patterns (no complex joins)

### Caching
**Why:** Reduce database load. Serve from memory (~100ns) vs disk (~10ms).

**Cache strategies:**
- **Cache-aside (lazy loading)**: app checks cache first; on miss, read DB and populate cache
- **Write-through**: write to cache AND DB simultaneously
- **Write-behind (write-back)**: write to cache; async write to DB later
- **Read-through**: cache handles DB read on miss

**Cache eviction policies:**
- **LRU**: evict least recently used
- **LFU**: evict least frequently used
- **TTL**: expire after fixed time

**Cache invalidation** is the hardest part. Strategies:
- TTL-based expiration
- Event-driven invalidation (write invalidates cache)
- Version-tagged cache keys

**Tools:** Redis (persistent, rich data structures), Memcached (simple, pure cache).

**Redis data structures:**
- String: simple cache, counters, rate limiting
- List: queues, activity feeds
- Set: unique visitors, tags
- Sorted Set (ZSET): leaderboards, priority queues
- Hash: user sessions, object storage

### Message Queues
**Why:** Decouple producers from consumers. Handle traffic spikes. Enable async processing.

**Kafka** — distributed log:
- Topics partitioned across brokers
- Consumer groups process partitions in parallel
- Messages retained for configurable time (replay-able)
- Excellent for: event streaming, audit logs, pub/sub at scale

**RabbitMQ** — message broker:
- Queues with routing (exchanges: direct, fanout, topic)
- Acknowledgment-based delivery guarantees
- Good for: task queues, RPC patterns

**SQS (AWS)** — managed queue:
- Standard: at-least-once, unordered
- FIFO: exactly-once, ordered
- Dead-letter queues for failed messages

### CDN (Content Delivery Network)
Serve static assets (images, JS, CSS, video) from edge nodes close to users.
- **Push CDN**: you upload content to CDN proactively
- **Pull CDN**: CDN fetches from origin on first request, caches

**Tools:** Cloudflare, AWS CloudFront, Fastly.

### Consistent Hashing
Used for distributing data across nodes with minimal remapping when nodes change.
- Map both nodes and keys to a hash ring (0 to 2^32)
- Each key is assigned to the first node clockwise
- Add/remove node: only adjacent keys migrate
- Virtual nodes: multiple positions per server = better distribution

### Rate Limiting
Protect APIs from abuse and control costs.

**Algorithms:**
- **Token bucket**: tokens added at rate r; request costs 1 token. Allows bursts.
- **Leaky bucket**: requests processed at constant rate. Smooths bursts.
- **Fixed window counter**: count requests per time window.
- **Sliding window log**: store request timestamps; count in last window.
- **Sliding window counter**: hybrid — accurate and efficient.

**Implementation:** Redis INCR + EXPIRE for distributed rate limiting.

---

## Classic Design Problems

### Design URL Shortener (tinyurl.com)

**Requirements:** Generate short URL → redirect to long URL. Read-heavy.

**Core flow:**
1. User posts long URL → service generates 7-char code (base62)
2. Store mapping: `short_code → long_url` in DB
3. GET `/abc123` → lookup in cache → DB → redirect

**Key decisions:**
- **ID generation**: Use auto-increment ID → base62 encode. Or MD5 first 7 chars (collision risk).
- **Cache**: Cache most popular redirects in Redis (80/20 rule)
- **DB**: Simple key-value — could use DynamoDB or just Redis for everything
- **Scale**: 100M URLs, 10B redirects/day = ~115K QPS reads

```
[Client] → [Load Balancer] → [App Servers]
                                 ↕                ↕
                             [Redis Cache]  [DB (DynamoDB)]
```

---

### Design Instagram / Photo Sharing

**Requirements:** Upload photos, follow users, news feed, likes/comments.

**Components:**
- **Upload service**: Client uploads to S3 directly (presigned URL). Store metadata in DB.
- **Feed generation**: Two approaches:
  - **Pull (fan-out on read)**: On load, fetch posts from all followees. Slow for users with many followees.
  - **Push (fan-out on write)**: On post, write to all followers' feed tables. Fast reads, expensive writes for celebrities.
  - **Hybrid**: Push for regular users, pull for celebrities (followee count > threshold).
- **Storage**: Photos on S3/CDN. Metadata (user, timestamp, location) in PostgreSQL. Feed cache in Redis.

```
[Upload] → S3 (raw) → Transcoding Service → S3 (processed) → CDN
[Post metadata] → DB → Feed service → Redis (pre-computed feeds)
```

---

### Design Twitter / News Feed

**Read-heavy.** Tweets, follows, timeline.

**Timeline generation (the hard part):**
- User has up to 500 followees
- Each creates ~10 tweets/day
- 500 × 10 = 5,000 tweets to merge and rank

**Fanout approach:**
1. When Alice tweets → look up Alice's followers → write tweet ID to each follower's timeline cache
2. Timeline read = just read from Redis, no DB join needed
3. Problem: celebrities with 10M followers → 10M writes per tweet
4. Solution: hybrid — pre-compute for regular users, real-time merge for celebrity tweets

---

### Design YouTube / Video Streaming

**Key components:**
- **Upload pipeline**: Video → transcoding service → multiple resolutions (360p, 720p, 1080p, 4K) → stored in blob storage (S3)
- **Metadata DB**: video ID, title, description, tags, user, timestamps → PostgreSQL
- **CDN**: Serve video segments close to user (adaptive bitrate streaming - HLS/DASH)
- **Recommendation engine**: Collaborative filtering, view history → separate ML pipeline

**Adaptive bitrate streaming:**
- Video split into 2-10 second segments
- Client requests segments; switches quality based on bandwidth
- Manifest file (.m3u8 for HLS) lists all segment URLs

---

### Design a Chat System (WhatsApp)

**Real-time bidirectional communication.**

**Connection types:**
- **Polling**: Client asks server every N seconds. Simple, inefficient.
- **Long-polling**: Client asks, server holds connection until message or timeout. Better.
- **WebSockets**: Persistent bidirectional TCP connection. Best for chat.
- **SSE (Server-Sent Events)**: Server push only (one-way). Good for notifications.

**Message flow:**
1. Alice sends message to Bob → WebSocket to chat server
2. Chat server stores in DB (Cassandra — good for message history)
3. If Bob online: push via WebSocket. If offline: store and notify via push notification.

**Presence (online status):**
- Heartbeat every 30s from client
- Last heartbeat > 60s → mark offline
- Store in Redis (fast expiry with TTL)

---

### Design a Rate Limiter

```python
# Redis-based sliding window rate limiter
import redis, time

class RateLimiter:
    def __init__(self, limit: int, window_seconds: int):
        self.r = redis.Redis()
        self.limit = limit
        self.window = window_seconds

    def is_allowed(self, user_id: str) -> bool:
        key = f"rate:{user_id}"
        now = time.time()
        window_start = now - self.window

        pipe = self.r.pipeline()
        pipe.zremrangebyscore(key, 0, window_start)   # remove old entries
        pipe.zadd(key, {str(now): now})                # add current request
        pipe.zcard(key)                                # count in window
        pipe.expire(key, self.window)
        results = pipe.execute()

        return results[2] <= self.limit
```

---

### Design a Distributed Cache (Redis)

**Challenges at scale:**
- **Eviction**: LRU, LFU, or random. Set maxmemory-policy.
- **Persistence**: RDB (snapshots) or AOF (append-only log). Both for safety.
- **Replication**: Primary-replica. Replicas handle reads.
- **Cluster mode**: Consistent hashing across 16,384 hash slots. Automatic sharding.
- **Thundering herd**: Many requests miss cache simultaneously → overwhelm DB.
  - Fix: mutex lock on cache miss; only one request fetches, others wait.
  - Or: probabilistic early expiration.

---

### Design a Search Autocomplete System

**Requirements:** As user types, return top 5 completions ranked by frequency.

**Approach 1: Trie + top-k at each node**
- Build trie from search queries
- Each node stores top-10 completions below it
- O(L) lookup where L = prefix length
- Update: periodic batch rebuild from logs (not real-time — too expensive)

**Approach 2: Off-the-shelf — Elasticsearch**
- completion suggester type
- edge n-gram tokenizer for prefix matching
- built-in scoring and ranking

**At scale:**
- Cache top-100 prefixes in Redis (99% of traffic is common prefixes)
- Async update frequency counts from stream (Kafka → Spark → rebuild trie)

---

## Non-Functional Requirements Cheatsheet

| Requirement | Solution |
|-------------|---------|
| High availability (99.9%+) | Redundancy, no SPOF, health checks, circuit breakers |
| Low latency reads | Cache, CDN, read replicas, async prefetch |
| High write throughput | Sharding, write-behind cache, message queues |
| Exactly-once processing | Idempotency keys, distributed transactions (2PC) |
| Ordering guarantees | Single partition, sequence numbers, vector clocks |
| Data consistency | ACID (SQL), 2PC for distributed, eventual consistency + conflict resolution |
| Search / full-text | Elasticsearch, Solr |
| Analytics / aggregation | Columnar stores (BigQuery, Redshift, ClickHouse) |
| Graph traversal | Neo4j, or BFS on adjacency lists in Redis |
| Geo-proximity | PostGIS, Geohash, Redis GEO commands |
| File / blob storage | S3, GCS, Azure Blob |
| Real-time streaming | Kafka + Flink/Spark Streaming |

---

## Numbers to Memorize

```
1 KB = 10^3 bytes
1 MB = 10^6 bytes
1 GB = 10^9 bytes
1 TB = 10^12 bytes

1 million requests/day  = ~12 requests/second
1 billion requests/day  = ~12,000 requests/second

Twitter scale: ~500M tweets/day = ~6,000 tweets/second
Google search: ~8.5B searches/day = ~100K QPS

Typical single server: ~1,000 QPS (web), ~10K QPS (in-memory)
Redis throughput: ~100,000 ops/second
Kafka throughput: millions of messages/second
```
