from collections import Counter

def task_scheduler(tasks: list[str], n: int) -> int:
    """🟡 Task Scheduler (LC #621)"""
    counts = list(Counter(tasks).values())
    max_count = max(counts)
    max_count_tasks = counts.count(max_count)
    return max(len(tasks), (max_count-1)*(n+1) + max_count_tasks)
