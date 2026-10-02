/** 🟡 Asteroid Collision (LC #735)
 * @param {number[]} asteroids
 * @returns {number[]}
 */
export function asteroidCollision(asteroids) {
  const stack = [];
  for (const a of asteroids) {
    let alive = true;
    while (alive && a < 0 && stack.length && stack[stack.length - 1] > 0) {
      const top = stack[stack.length - 1];
      if (top < -a) stack.pop();
      else if (top === -a) {
        stack.pop();
        alive = false;
      } else alive = false;
    }
    if (alive) stack.push(a);
  }
  return stack;
}
