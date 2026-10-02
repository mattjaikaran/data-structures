/**
 * 🟡 boatsToSavePeople (LC #881)
 * @param {number[]} people
 * @param {number} limit
 * @returns {number}
 */
export function boatsToSavePeople(people, limit) {
  people.sort((a,b)=>a-b);
  let l = 0, r = people.length - 1, boats = 0;
  while (l <= r) {
    if (people[l] + people[r] <= limit) l++;
    r--; boats++;
  }
  return boats;
}
