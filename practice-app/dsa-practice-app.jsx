import { useState, useEffect, useCallback } from "react";

const PROBLEMS = [
  // Arrays
  { id: 1, title: "Two Sum", category: "Arrays", difficulty: "Easy", description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers that add up to `target`.\n\nAssume exactly one solution exists. You may not use the same element twice.", examples: ["Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: nums[0] + nums[1] = 9", "Input: nums = [3,2,4], target = 6\nOutput: [1,2]"], constraints: ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹", "Only one valid answer exists"], hint: "Use a hash map to store each number and its index. For each element, check if its complement (target - num) already exists in the map.", pattern: "Hash Map" },
  { id: 2, title: "Maximum Subarray", category: "Arrays", difficulty: "Medium", description: "Given an integer array `nums`, find the contiguous subarray with the largest sum and return its sum.", examples: ["Input: [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: [4,-1,2,1] has the largest sum = 6", "Input: [1]\nOutput: 1"], constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"], hint: "Kadane's Algorithm: track current sum and best sum. At each element: cur = max(num, cur + num).", pattern: "Kadane's / DP" },
  { id: 3, title: "Product of Array Except Self", category: "Arrays", difficulty: "Medium", description: "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all elements except `nums[i]`.\n\nSolve in O(n) time without using division.", examples: ["Input: [1,2,3,4]\nOutput: [24,12,8,6]", "Input: [-1,1,0,-3,3]\nOutput: [0,0,9,0,0]"], constraints: ["2 ≤ nums.length ≤ 10⁵", "Guaranteed answer fits in 32-bit integer", "Do NOT use division"], hint: "Two passes: left pass stores prefix products, right pass multiplies in suffix products on the fly.", pattern: "Prefix/Suffix Product" },
  { id: 4, title: "Longest Consecutive Sequence", category: "Arrays", difficulty: "Medium", description: "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.\n\nMust run in O(n) time.", examples: ["Input: [100,4,200,1,3,2]\nOutput: 4\nExplanation: [1,2,3,4]", "Input: [0,3,7,2,5,8,4,6,0,1]\nOutput: 9"], constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"], hint: "Add all numbers to a hash set. Only start counting sequences from n where n-1 is NOT in the set — that's the sequence start.", pattern: "Hash Set" },
  // Sliding Window
  { id: 5, title: "Longest Substring Without Repeating", category: "Sliding Window", difficulty: "Medium", description: "Given a string `s`, find the length of the longest substring without repeating characters.", examples: ["Input: \"abcabcbb\"\nOutput: 3\nExplanation: \"abc\"", "Input: \"bbbbb\"\nOutput: 1", "Input: \"pwwkew\"\nOutput: 3"], constraints: ["0 ≤ s.length ≤ 5×10⁴", "s consists of English letters, digits, symbols and spaces"], hint: "Sliding window + hash map. Store the last seen index of each char. When duplicate found, move left pointer to max(left, last_seen+1).", pattern: "Sliding Window" },
  { id: 6, title: "Minimum Window Substring", category: "Sliding Window", difficulty: "Hard", description: "Given strings `s` and `t`, return the minimum window substring of `s` that contains all characters in `t`. Return empty string if no such window exists.", examples: ["Input: s=\"ADOBECODEBANC\", t=\"ABC\"\nOutput: \"BANC\"", "Input: s=\"a\", t=\"a\"\nOutput: \"a\"", "Input: s=\"a\", t=\"aa\"\nOutput: \"\""], constraints: ["1 ≤ s.length, t.length ≤ 10⁵", "s and t consist of uppercase and lowercase letters"], hint: "Expand right until window contains all of t. Then shrink left while valid. Track 'have' vs 'need' counts.", pattern: "Sliding Window" },
  // Linked Lists
  { id: 7, title: "Reverse Linked List", category: "Linked Lists", difficulty: "Easy", description: "Given the `head` of a singly linked list, reverse the list and return the reversed list.\n\nImplement both iterative and recursive solutions.", examples: ["Input: 1→2→3→4→5\nOutput: 5→4→3→2→1", "Input: 1→2\nOutput: 2→1"], constraints: ["0 ≤ number of nodes ≤ 5000", "-5000 ≤ Node.val ≤ 5000"], hint: "Iterative: three pointers — prev=None, cur=head. At each step: save next, point cur.next to prev, advance both. Recursive: reverse(head.next), then head.next.next = head.", pattern: "Three Pointers" },
  { id: 8, title: "LRU Cache", category: "Linked Lists", difficulty: "Medium", description: "Design a data structure that follows Least Recently Used cache eviction.\n\nImplement `LRUCache(capacity)`, `get(key)` → value or -1, and `put(key, value)`. Both operations must be O(1).", examples: ["LRUCache(2)\nput(1,1) → cache={1:1}\nput(2,2) → cache={1:1, 2:2}\nget(1) → 1\nput(3,3) → evicts key 2\nget(2) → -1\nget(3) → 3"], constraints: ["1 ≤ capacity ≤ 3000", "0 ≤ key, value ≤ 10⁴", "At most 2×10⁴ calls to get and put"], hint: "Hash map for O(1) lookup + doubly linked list for O(1) order updates. Most recent = tail, least recent = head. On access: move node to tail. On evict: remove head.", pattern: "HashMap + Doubly Linked List" },
  // Trees
  { id: 9, title: "Invert Binary Tree", category: "Trees", difficulty: "Easy", description: "Given the `root` of a binary tree, invert the tree (mirror it), and return its root.", examples: ["Input:     4\n         /   \\\n        2     7\n       / \\ / \\\n      1  3 6  9\n\nOutput:    4\n         /   \\\n        7     2\n       / \\ / \\\n      9  6 3  1"], constraints: ["0 ≤ number of nodes ≤ 100", "-100 ≤ Node.val ≤ 100"], hint: "At each node: swap left and right children, then recursively invert both subtrees.", pattern: "DFS" },
  { id: 10, title: "Binary Tree Maximum Path Sum", category: "Trees", difficulty: "Hard", description: "A path in a binary tree is a sequence of nodes where each adjacent pair is connected. The path sum is the sum of node values along the path.\n\nReturn the maximum path sum of any non-empty path.", examples: ["Input: [1,2,3]\nOutput: 6\nExplanation: 2→1→3", "Input: [-10,9,20,null,null,15,7]\nOutput: 42\nExplanation: 15→20→7"], constraints: ["-1000 ≤ Node.val ≤ 1000", "1 ≤ number of nodes ≤ 3×10⁴"], hint: "DFS returning max gain from each subtree. At each node: global_max = max(global_max, left_gain + node + right_gain). Return node + max(left_gain, right_gain, 0).", pattern: "DFS Bottom-Up" },
  { id: 11, title: "Validate Binary Search Tree", category: "Trees", difficulty: "Medium", description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).\n\nA valid BST: left subtree has only nodes with keys < node's key; right subtree has only nodes with keys > node's key; both subtrees are also BSTs.", examples: ["Input: [2,1,3]\nOutput: true", "Input: [5,1,4,null,null,3,6]\nOutput: false\nExplanation: root's right child 4 < root 5"], constraints: ["-2³¹ ≤ Node.val ≤ 2³¹-1"], hint: "Pass valid range [min, max] down the tree. Left child must stay below node val, right child above. Start with (-∞, +∞).", pattern: "DFS Top-Down" },
  // Graphs
  { id: 12, title: "Number of Islands", category: "Graphs", difficulty: "Medium", description: "Given an m×n 2D binary grid where '1' is land and '0' is water, return the number of islands.\n\nAn island is surrounded by water and formed by connecting adjacent '1's horizontally or vertically.", examples: ["Input:\n11110\n11010\n11000\n00000\nOutput: 1", "Input:\n11000\n11000\n00100\n00011\nOutput: 3"], constraints: ["1 ≤ m, n ≤ 300", "grid[i][j] is '0' or '1'"], hint: "Iterate grid. When you find a '1', increment counter and DFS to mark all connected land as '0' (visited). Each DFS call = one island.", pattern: "DFS Flood Fill" },
  { id: 13, title: "Course Schedule", category: "Graphs", difficulty: "Medium", description: "There are `numCourses` labeled 0 to numCourses-1. Given an array `prerequisites` where `[a, b]` means you must take course b before a, return whether you can finish all courses.", examples: ["Input: numCourses=2, prerequisites=[[1,0]]\nOutput: true", "Input: numCourses=2, prerequisites=[[1,0],[0,1]]\nOutput: false\nExplanation: cycle — 0 requires 1, 1 requires 0"], constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000"], hint: "Build adjacency list. DFS with 3-color state: 0=unvisited, 1=in-progress, 2=done. If you visit an in-progress node, there's a cycle.", pattern: "Cycle Detection / Topological Sort" },
  // Dynamic Programming
  { id: 14, title: "Climbing Stairs", category: "Dynamic Programming", difficulty: "Easy", description: "You're climbing a staircase with `n` steps. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?", examples: ["Input: n=2\nOutput: 2\nExplanation: (1+1) or (2)", "Input: n=3\nOutput: 3\nExplanation: (1+1+1), (1+2), (2+1)"], constraints: ["1 ≤ n ≤ 45"], hint: "It's Fibonacci. dp[n] = dp[n-1] + dp[n-2]. You only need last two values, so O(1) space.", pattern: "1D DP / Fibonacci" },
  { id: 15, title: "Coin Change", category: "Dynamic Programming", difficulty: "Medium", description: "Given an array of `coins` of different denominations and an integer `amount`, return the fewest number of coins needed to make up that amount. Return -1 if it's not possible.", examples: ["Input: coins=[1,5,11], amount=11\nOutput: 1", "Input: coins=[1,2,5], amount=11\nOutput: 3\nExplanation: 5+5+1", "Input: coins=[2], amount=3\nOutput: -1"], constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹-1", "0 ≤ amount ≤ 10⁴"], hint: "Unbounded knapsack. dp[a] = min coins to make amount a. For each amount, try each coin: dp[a] = min(dp[a], dp[a-coin]+1).", pattern: "Unbounded Knapsack" },
  { id: 16, title: "Longest Common Subsequence", category: "Dynamic Programming", difficulty: "Medium", description: "Given two strings `text1` and `text2`, return the length of their longest common subsequence. A subsequence doesn't need to be contiguous.", examples: ["Input: text1=\"abcde\", text2=\"ace\"\nOutput: 3\nExplanation: \"ace\"", "Input: text1=\"abc\", text2=\"abc\"\nOutput: 3", "Input: text1=\"abc\", text2=\"def\"\nOutput: 0"], constraints: ["1 ≤ text1.length, text2.length ≤ 1000", "Strings consist of lowercase letters"], hint: "2D DP. If chars match: dp[i][j] = dp[i-1][j-1]+1. If not: dp[i][j] = max(dp[i-1][j], dp[i][j-1]).", pattern: "2D DP" },
  { id: 17, title: "Word Break", category: "Dynamic Programming", difficulty: "Medium", description: "Given a string `s` and a dictionary of strings `wordDict`, return true if `s` can be segmented into a space-separated sequence of dictionary words.", examples: ["Input: s=\"leetcode\", wordDict=[\"leet\",\"code\"]\nOutput: true", "Input: s=\"applepenapple\", wordDict=[\"apple\",\"pen\"]\nOutput: true", "Input: s=\"catsandog\", wordDict=[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]\nOutput: false"], constraints: ["1 ≤ s.length ≤ 300", "1 ≤ wordDict.length ≤ 1000"], hint: "dp[i] = can s[0:i] be segmented. dp[0]=True. For each i, check if dp[j] and s[j:i] in wordDict for any j.", pattern: "1D DP + Hash Set" },
  // Backtracking
  { id: 18, title: "Combination Sum", category: "Backtracking", difficulty: "Medium", description: "Given an array of distinct integers `candidates` and a `target`, return all unique combinations that sum to target. You may reuse the same number unlimited times.", examples: ["Input: candidates=[2,3,6,7], target=7\nOutput: [[2,2,3],[7]]", "Input: candidates=[2,3], target=6\nOutput: [[2,2,2],[2,4] no — [3,3]]"], constraints: ["1 ≤ candidates.length ≤ 30", "1 ≤ candidates[i] ≤ 200", "All elements are distinct", "1 ≤ target ≤ 500"], hint: "Backtracking. Sort candidates. At each step try each candidate from current index (allows reuse). Prune when candidate > remaining.", pattern: "Backtracking" },
  { id: 19, title: "N-Queens", category: "Backtracking", difficulty: "Hard", description: "Place `n` queens on an n×n chessboard so no two queens attack each other (same row, column, or diagonal). Return all distinct solutions.", examples: ["Input: n=4\nOutput: [\n  [\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],\n  [\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]\n]"], constraints: ["1 ≤ n ≤ 9"], hint: "Place one queen per row. Track used columns, diagonals (row-col), and anti-diagonals (row+col) in sets. Backtrack if conflict.", pattern: "Backtracking + Constraint Propagation" },
  // Greedy
  { id: 20, title: "Jump Game", category: "Greedy", difficulty: "Medium", description: "Given an integer array `nums` where `nums[i]` is your maximum jump length from position i, return whether you can reach the last index starting from index 0.", examples: ["Input: [2,3,1,1,4]\nOutput: true", "Input: [3,2,1,0,4]\nOutput: false\nExplanation: always reach index 3 but nums[3]=0"], constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 10⁵"], hint: "Track the farthest reachable index. If current index > farthest, return false. Otherwise update farthest = max(farthest, i + nums[i]).", pattern: "Greedy" },
  { id: 21, title: "Meeting Rooms II", category: "Greedy", difficulty: "Medium", description: "Given an array of meeting time intervals `[start, end]`, find the minimum number of conference rooms required.", examples: ["Input: [[0,30],[5,10],[15,20]]\nOutput: 2", "Input: [[7,10],[2,4]]\nOutput: 1"], constraints: ["1 ≤ intervals.length ≤ 10⁴", "0 ≤ start < end ≤ 10⁶"], hint: "Sort by start time. Use a min-heap of end times. For each meeting: if heap top ≤ start, reuse that room (pop and push new end). Otherwise add new room.", pattern: "Greedy + Min Heap" },
  // Heap
  { id: 22, title: "Find Median from Data Stream", category: "Heap", difficulty: "Hard", description: "Design a data structure that supports:\n- `addNum(num)` — add an integer\n- `findMedian()` — return the median\n\nIf even count: median is average of two middle values.", examples: ["addNum(1), addNum(2)\nfindMedian() → 1.5\naddNum(3)\nfindMedian() → 2.0"], constraints: ["-10⁵ ≤ num ≤ 10⁵", "At most 5×10⁴ calls total", "findMedian called at least once"], hint: "Two heaps: max-heap for lower half, min-heap for upper half. Keep sizes equal or lower one larger by 1. Median = top of lower (or avg of both tops).", pattern: "Two Heaps" },
  // Tries
  { id: 23, title: "Implement Trie", category: "Tries", difficulty: "Medium", description: "Implement a trie (prefix tree) with:\n- `insert(word)` — insert a word\n- `search(word)` → bool — returns true if word exists\n- `startsWith(prefix)` → bool — returns true if any word has this prefix", examples: ["Trie trie = new Trie()\ntrie.insert(\"apple\")\ntrie.search(\"apple\") → true\ntrie.search(\"app\") → false\ntrie.startsWith(\"app\") → true\ntrie.insert(\"app\")\ntrie.search(\"app\") → true"], constraints: ["1 ≤ word.length, prefix.length ≤ 2000", "All inputs are lowercase letters", "At most 3×10⁴ calls"], hint: "Each node has children dict and is_end flag. Insert: walk/create nodes char by char, mark last as end. Search: walk nodes, return is_end. StartsWith: just walk nodes.", pattern: "Trie" },
  // Strings
  { id: 24, title: "Longest Palindromic Substring", category: "Strings", difficulty: "Medium", description: "Given a string `s`, return the longest palindromic substring.", examples: ["Input: \"babad\"\nOutput: \"bab\" (or \"aba\")", "Input: \"cbbd\"\nOutput: \"bb\""], constraints: ["1 ≤ s.length ≤ 1000", "s consists of digits and letters"], hint: "Expand around center: for each position, expand both as odd-length (single center) and even-length (two centers). Track longest found.", pattern: "Expand Around Center" },
  { id: 25, title: "Group Anagrams", category: "Strings", difficulty: "Medium", description: "Given an array of strings `strs`, group the anagrams together. Return in any order.", examples: ["Input: [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\nOutput: [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]", "Input: [\"\"]\nOutput: [[\"\"]]"], constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100", "Strings consist of lowercase letters"], hint: "Sort each string alphabetically → use as key in a hash map. All anagrams share the same sorted key.", pattern: "Hash Map" },
  // Bit Manipulation
  { id: 26, title: "Number of 1 Bits", category: "Bit Manipulation", difficulty: "Easy", description: "Write a function that takes an unsigned integer and returns the number of '1' bits (Hamming weight).", examples: ["Input: 00000000000000000000000000001011\nOutput: 3", "Input: 00000000000000000000000010000000\nOutput: 1", "Input: 11111111111111111111111111111101\nOutput: 31"], constraints: ["Input is a 32-bit unsigned integer"], hint: "Trick: n & (n-1) clears the lowest set bit. Count how many times you can do this before n == 0.", pattern: "Bit Trick" },
  { id: 27, title: "Sum of Two Integers", category: "Bit Manipulation", difficulty: "Medium", description: "Given two integers `a` and `b`, return their sum WITHOUT using the operators `+` or `-`.", examples: ["Input: a=1, b=2\nOutput: 3", "Input: a=2, b=3\nOutput: 5"], constraints: ["-1000 ≤ a, b ≤ 1000"], hint: "XOR gives sum without carry. AND << 1 gives carry bits. Repeat until no carry: a = a XOR b, carry = (a AND b) << 1, then set b = carry.", pattern: "Bit Manipulation" },
  // Sorting
  { id: 28, title: "Merge Intervals", category: "Sorting", difficulty: "Medium", description: "Given an array of intervals where `intervals[i] = [start, end]`, merge all overlapping intervals and return the result.", examples: ["Input: [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]", "Input: [[1,4],[4,5]]\nOutput: [[1,5]]"], constraints: ["1 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2"], hint: "Sort by start time. Iterate: if current start ≤ last merged end, extend last merged end. Otherwise add new interval.", pattern: "Sort + Greedy" },
];

const DIFFICULTY_COLORS = { Easy: "#4ade80", Medium: "#fb923c", Hard: "#f87171" };
const CATEGORY_COLORS = {
  "Arrays": "#60a5fa", "Sliding Window": "#a78bfa", "Linked Lists": "#34d399",
  "Trees": "#fbbf24", "Graphs": "#f472b6", "Dynamic Programming": "#fb7185",
  "Backtracking": "#c084fc", "Greedy": "#2dd4bf", "Heap": "#f97316",
  "Tries": "#4ade80", "Strings": "#60a5fa", "Bit Manipulation": "#a3e635",
  "Sorting": "#facc15"
};

const CATEGORIES = [...new Set(PROBLEMS.map(p => p.category))];

export default function DSAPractice() {
  const [selected, setSelected] = useState(PROBLEMS[0]);
  const [code, setCode] = useState("");
  const [filter, setFilter] = useState({ category: "All", difficulty: "All", search: "" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [solved, setSolved] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [tab, setTab] = useState("problem"); // problem | result

  useEffect(() => {
    const loadSolved = async () => {
      try {
        const r = await window.storage.get("dsa_solved");
        if (r) setSolved(JSON.parse(r.value));
      } catch {}
    };
    loadSolved();
  }, []);

  const saveSolved = async (updated) => {
    try { await window.storage.set("dsa_solved", JSON.stringify(updated)); } catch {}
  };

  const filtered = PROBLEMS.filter(p => {
    if (filter.category !== "All" && p.category !== filter.category) return false;
    if (filter.difficulty !== "All" && p.difficulty !== filter.difficulty) return false;
    if (filter.search && !p.title.toLowerCase().includes(filter.search.toLowerCase())) return false;
    return true;
  });

  const selectProblem = (p) => {
    setSelected(p);
    setResult(null);
    setShowHint(false);
    setTab("problem");
    setCode("");
  };

  const checkSolution = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setTab("result");
    setResult(null);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `You are a strict but helpful coding interview evaluator. Evaluate this solution to the problem below.

PROBLEM: ${selected.title}
${selected.description}

Examples:
${selected.examples.join("\n\n")}

USER'S SOLUTION:
\`\`\`
${code}
\`\`\`

Respond in this EXACT JSON format (no markdown, no backticks, just raw JSON):
{
  "verdict": "CORRECT" | "PARTIAL" | "INCORRECT",
  "score": 0-100,
  "timeComplexity": "O(...)",
  "spaceComplexity": "O(...)",
  "isOptimal": true | false,
  "bugs": ["list of bugs or empty array"],
  "goodThings": ["list of what's done well"],
  "improvement": "one concrete suggestion or empty string",
  "optimalApproach": "brief description of optimal approach if not used"
}`
          }]
        })
      });
      const data = await response.json();
      const text = data.content[0].text;
      const parsed = JSON.parse(text);
      setResult(parsed);
      if (parsed.verdict === "CORRECT" || parsed.score >= 80) {
        const updated = { ...solved, [selected.id]: true };
        setSolved(updated);
        saveSolved(updated);
      }
    } catch (e) {
      setResult({ verdict: "ERROR", score: 0, bugs: ["Failed to evaluate. Check your code syntax."], goodThings: [], improvement: "", optimalApproach: "", timeComplexity: "?", spaceComplexity: "?", isOptimal: false });
    }
    setLoading(false);
  };

  const solvedCount = Object.keys(solved).length;
  const totalCount = PROBLEMS.length;

  return (
    <div style={{ display: "flex", height: "100vh", background: "#0d1117", color: "#e6edf3", fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #161b22; }
        ::-webkit-scrollbar-thumb { background: #30363d; border-radius: 2px; }
        textarea { resize: none; }
        textarea:focus { outline: none; }
        button { cursor: pointer; border: none; font-family: inherit; }
        .prob-item:hover { background: #1c2128 !important; }
        .prob-item.active { background: #161b22 !important; border-left: 2px solid #58a6ff !important; }
        .tab-btn { transition: all 0.15s; }
        .tab-btn:hover { color: #e6edf3 !important; }
        .check-btn:hover:not(:disabled) { background: #3fb950 !important; transform: translateY(-1px); }
        .check-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .hint-btn:hover { background: #21262d !important; }
        .cat-chip:hover { opacity: 0.8; }
        input:focus { outline: none; }
        select:focus { outline: none; }
      `}</style>

      {/* Sidebar */}
      <div style={{ width: 280, background: "#161b22", borderRight: "1px solid #21262d", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        {/* Header */}
        <div style={{ padding: "16px", borderBottom: "1px solid #21262d" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#58a6ff", letterSpacing: "0.1em", textTransform: "uppercase" }}>DSA Practice</div>
          <div style={{ fontSize: 11, color: "#8b949e", marginTop: 4 }}>
            <span style={{ color: "#3fb950" }}>{solvedCount}</span> / {totalCount} solved
          </div>
          {/* Progress bar */}
          <div style={{ height: 3, background: "#21262d", borderRadius: 2, marginTop: 8 }}>
            <div style={{ height: "100%", width: `${(solvedCount/totalCount)*100}%`, background: "#3fb950", borderRadius: 2, transition: "width 0.4s" }} />
          </div>
        </div>

        {/* Filters */}
        <div style={{ padding: "10px 12px", borderBottom: "1px solid #21262d", display: "flex", flexDirection: "column", gap: 6 }}>
          <input
            placeholder="Search problems..."
            value={filter.search}
            onChange={e => setFilter(f => ({...f, search: e.target.value}))}
            style={{ background: "#0d1117", border: "1px solid #30363d", color: "#e6edf3", padding: "5px 8px", borderRadius: 4, fontSize: 11, fontFamily: "inherit" }}
          />
          <div style={{ display: "flex", gap: 6 }}>
            <select value={filter.difficulty} onChange={e => setFilter(f => ({...f, difficulty: e.target.value}))}
              style={{ flex: 1, background: "#0d1117", border: "1px solid #30363d", color: "#e6edf3", padding: "4px 6px", borderRadius: 4, fontSize: 10, fontFamily: "inherit" }}>
              <option>All</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <select value={filter.category} onChange={e => setFilter(f => ({...f, category: e.target.value}))}
              style={{ flex: 1, background: "#0d1117", border: "1px solid #30363d", color: "#e6edf3", padding: "4px 6px", borderRadius: 4, fontSize: 10, fontFamily: "inherit" }}>
              <option>All</option>
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {/* Problem list */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {filtered.map(p => (
            <div key={p.id} className={`prob-item ${selected?.id === p.id ? 'active' : ''}`}
              onClick={() => selectProblem(p)}
              style={{ padding: "10px 14px", borderLeft: "2px solid transparent", cursor: "pointer", borderBottom: "1px solid #161b22", transition: "all 0.1s" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: solved[p.id] ? "#3fb950" : "#e6edf3" }}>
                  {solved[p.id] ? "✓ " : ""}{p.title}
                </span>
                <span style={{ fontSize: 10, color: DIFFICULTY_COLORS[p.difficulty], fontWeight: 600 }}>{p.difficulty[0]}</span>
              </div>
              <div style={{ fontSize: 10, color: "#8b949e" }}>{p.category}</div>
            </div>
          ))}
          {filtered.length === 0 && <div style={{ padding: 20, fontSize: 11, color: "#8b949e", textAlign: "center" }}>No problems match</div>}
        </div>
      </div>

      {/* Main panel */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Problem header */}
        <div style={{ padding: "14px 20px", borderBottom: "1px solid #21262d", display: "flex", alignItems: "center", gap: 12, background: "#161b22" }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3" }}>{selected.title}</span>
          <span style={{ fontSize: 11, color: DIFFICULTY_COLORS[selected.difficulty], fontWeight: 600, background: DIFFICULTY_COLORS[selected.difficulty] + "22", padding: "2px 8px", borderRadius: 10 }}>{selected.difficulty}</span>
          <span className="cat-chip" style={{ fontSize: 10, color: CATEGORY_COLORS[selected.category] || "#8b949e", background: (CATEGORY_COLORS[selected.category] || "#8b949e") + "1a", padding: "2px 8px", borderRadius: 10 }}>{selected.category}</span>
          <span style={{ fontSize: 10, color: "#8b949e", marginLeft: "auto" }}>Pattern: <span style={{ color: "#58a6ff" }}>{selected.pattern}</span></span>
        </div>

        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {/* Left: problem + code */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Tabs */}
            <div style={{ display: "flex", borderBottom: "1px solid #21262d", background: "#0d1117" }}>
              {["problem", "result"].map(t => (
                <button key={t} className="tab-btn"
                  onClick={() => setTab(t)}
                  style={{ padding: "8px 16px", fontSize: 11, fontWeight: 600, background: "transparent", color: tab === t ? "#58a6ff" : "#8b949e", borderBottom: tab === t ? "2px solid #58a6ff" : "2px solid transparent", textTransform: "capitalize", letterSpacing: "0.05em", fontFamily: "inherit" }}>
                  {t === "result" && loading ? "Checking..." : t}
                  {t === "result" && result && !loading && (
                    <span style={{ marginLeft: 6, color: result.verdict === "CORRECT" ? "#3fb950" : result.verdict === "PARTIAL" ? "#fb923c" : "#f87171", fontSize: 10 }}>
                      {result.verdict === "CORRECT" ? "✓" : result.verdict === "PARTIAL" ? "~" : "✗"}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              {tab === "problem" ? (
                <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: "#c9d1d9", whiteSpace: "pre-wrap", marginBottom: 20 }}>{selected.description}</p>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Examples</div>
                    {selected.examples.map((ex, i) => (
                      <div key={i} style={{ background: "#161b22", border: "1px solid #21262d", borderRadius: 6, padding: "10px 14px", marginBottom: 8 }}>
                        <pre style={{ fontSize: 12, color: "#e6edf3", whiteSpace: "pre-wrap", fontFamily: "inherit" }}>{ex}</pre>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Constraints</div>
                    {selected.constraints.map((c, i) => (
                      <div key={i} style={{ fontSize: 12, color: "#8b949e", marginBottom: 4 }}>• {c}</div>
                    ))}
                  </div>

                  <button className="hint-btn" onClick={() => setShowHint(!showHint)}
                    style={{ background: "#161b22", border: "1px solid #30363d", color: "#8b949e", padding: "6px 12px", borderRadius: 4, fontSize: 11, fontFamily: "inherit", transition: "all 0.15s" }}>
                    {showHint ? "Hide hint" : "💡 Show hint"}
                  </button>
                  {showHint && (
                    <div style={{ marginTop: 10, background: "#fbbf2408", border: "1px solid #fbbf2440", borderRadius: 6, padding: "10px 14px" }}>
                      <div style={{ fontSize: 12, color: "#fbbf24", lineHeight: 1.6 }}>{selected.hint}</div>
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
                  {loading && (
                    <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#8b949e", fontSize: 13 }}>
                      <div style={{ width: 16, height: 16, border: "2px solid #30363d", borderTop: "2px solid #58a6ff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                      Evaluating your solution...
                      <style>{`@keyframes spin { to { transform: rotate(360deg); }}`}</style>
                    </div>
                  )}
                  {result && !loading && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                      {/* Verdict */}
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{
                          fontSize: 18, fontWeight: 800, letterSpacing: "0.05em",
                          color: result.verdict === "CORRECT" ? "#3fb950" : result.verdict === "PARTIAL" ? "#fb923c" : "#f87171"
                        }}>
                          {result.verdict === "CORRECT" ? "✓ CORRECT" : result.verdict === "PARTIAL" ? "~ PARTIAL" : "✗ INCORRECT"}
                        </div>
                        <div style={{ fontSize: 12, color: "#8b949e" }}>Score: <span style={{ color: "#e6edf3", fontWeight: 600 }}>{result.score}/100</span></div>
                      </div>

                      {/* Complexity */}
                      <div style={{ display: "flex", gap: 10 }}>
                        {[["Time", result.timeComplexity], ["Space", result.spaceComplexity]].map(([label, val]) => (
                          <div key={label} style={{ background: "#161b22", border: "1px solid #21262d", borderRadius: 6, padding: "8px 14px", flex: 1 }}>
                            <div style={{ fontSize: 10, color: "#8b949e", marginBottom: 2 }}>{label} Complexity</div>
                            <div style={{ fontSize: 14, fontWeight: 600, color: "#58a6ff" }}>{val}</div>
                          </div>
                        ))}
                        <div style={{ background: "#161b22", border: "1px solid #21262d", borderRadius: 6, padding: "8px 14px", flex: 1 }}>
                          <div style={{ fontSize: 10, color: "#8b949e", marginBottom: 2 }}>Optimal?</div>
                          <div style={{ fontSize: 14, fontWeight: 600, color: result.isOptimal ? "#3fb950" : "#fb923c" }}>{result.isOptimal ? "Yes" : "Not yet"}</div>
                        </div>
                      </div>

                      {/* Bugs */}
                      {result.bugs?.length > 0 && (
                        <div style={{ background: "#f871711a", border: "1px solid #f8717140", borderRadius: 6, padding: "10px 14px" }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#f87171", marginBottom: 6 }}>ISSUES</div>
                          {result.bugs.map((b, i) => <div key={i} style={{ fontSize: 12, color: "#fca5a5", marginBottom: 4, lineHeight: 1.5 }}>• {b}</div>)}
                        </div>
                      )}

                      {/* Good things */}
                      {result.goodThings?.length > 0 && (
                        <div style={{ background: "#3fb9501a", border: "1px solid #3fb95040", borderRadius: 6, padding: "10px 14px" }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#3fb950", marginBottom: 6 }}>GOOD</div>
                          {result.goodThings.map((g, i) => <div key={i} style={{ fontSize: 12, color: "#86efac", marginBottom: 4, lineHeight: 1.5 }}>✓ {g}</div>)}
                        </div>
                      )}

                      {/* Improvement */}
                      {result.improvement && (
                        <div style={{ background: "#58a6ff1a", border: "1px solid #58a6ff40", borderRadius: 6, padding: "10px 14px" }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#58a6ff", marginBottom: 4 }}>NEXT STEP</div>
                          <div style={{ fontSize: 12, color: "#93c5fd", lineHeight: 1.6 }}>{result.improvement}</div>
                        </div>
                      )}

                      {/* Optimal approach */}
                      {result.optimalApproach && !result.isOptimal && (
                        <div style={{ background: "#fbbf241a", border: "1px solid #fbbf2440", borderRadius: 6, padding: "10px 14px" }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#fbbf24", marginBottom: 4 }}>OPTIMAL APPROACH</div>
                          <div style={{ fontSize: 12, color: "#fde68a", lineHeight: 1.6 }}>{result.optimalApproach}</div>
                        </div>
                      )}
                    </div>
                  )}
                  {!result && !loading && (
                    <div style={{ fontSize: 13, color: "#8b949e" }}>Write your solution then click "Check Solution" to get AI feedback.</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: code editor */}
          <div style={{ width: 480, borderLeft: "1px solid #21262d", display: "flex", flexDirection: "column", background: "#0d1117" }}>
            <div style={{ padding: "8px 14px", borderBottom: "1px solid #21262d", display: "flex", alignItems: "center", gap: 8, background: "#161b22" }}>
              <div style={{ fontSize: 10, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.1em", flex: 1 }}>Solution</div>
              <div style={{ fontSize: 10, color: "#8b949e" }}>Any language</div>
            </div>
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder={`# Write your solution here\n# Any language works — Python, JS, TypeScript...\n\ndef ${selected.title.toLowerCase().replace(/[^a-z]/g, '_')}(...):\n    pass`}
              style={{ flex: 1, background: "#0d1117", border: "none", color: "#e6edf3", fontSize: 13, padding: "14px 16px", lineHeight: 1.7, fontFamily: "'JetBrains Mono', monospace", tabSize: 4 }}
              onKeyDown={e => {
                if (e.key === "Tab") { e.preventDefault(); const s = e.target.selectionStart; const v = code; setCode(v.substring(0, s) + "    " + v.substring(e.target.selectionEnd)); setTimeout(() => e.target.setSelectionRange(s+4, s+4), 0); }
              }}
              spellCheck={false}
            />
            <div style={{ padding: "10px 14px", borderTop: "1px solid #21262d", display: "flex", gap: 8, background: "#161b22" }}>
              <button onClick={() => setCode("")}
                style={{ background: "transparent", color: "#8b949e", padding: "6px 12px", borderRadius: 4, fontSize: 11, fontFamily: "inherit", border: "1px solid #30363d" }}>
                Clear
              </button>
              <button className="check-btn" onClick={checkSolution} disabled={loading || !code.trim()}
                style={{ flex: 1, background: "#238636", color: "#fff", padding: "8px 16px", borderRadius: 4, fontSize: 12, fontWeight: 700, fontFamily: "inherit", letterSpacing: "0.05em", transition: "all 0.15s" }}>
                {loading ? "Checking..." : "Check Solution →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
