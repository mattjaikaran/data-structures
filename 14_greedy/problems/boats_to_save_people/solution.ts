export function boatsToSavePeople(people: number[], limit: number): number {
  people.sort((a,b)=>a-b);
  let l = 0, r = people.length - 1, boats = 0;
  while (l <= r) {
    if (people[l] + people[r] <= limit) l++;
    r--; boats++;
  }
  return boats;
}
