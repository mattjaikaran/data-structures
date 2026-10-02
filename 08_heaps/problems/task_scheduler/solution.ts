export function taskScheduler(tasks: string[], n: number): number {
  const cnt: Record<string,number> = {};
  for (const t of tasks) cnt[t] = (cnt[t]??0)+1;
  const counts = Object.values(cnt);
  const maxCount = Math.max(...counts);
  const maxCountTasks = counts.filter(c=>c===maxCount).length;
  return Math.max(tasks.length, (maxCount-1)*(n+1)+maxCountTasks);
}
