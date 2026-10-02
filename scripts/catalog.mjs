import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';

export const languages = ['js', 'py', 'ts', 'rs', 'sql'];
export const difficulties = ['foundation', 'easy', 'medium', 'hard'];

export function discover(root) {
  const metadata = JSON.parse(readFileSync(join(root, 'resources/exercises.json'), 'utf8'));
  const topics = readdirSync(root, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && /^\d{2}_/.test(entry.name)).map(entry => entry.name).sort();
  const lessons = topics.flatMap(topic => ['fundamentals', 'problems'].flatMap(section => {
    const directory = join(root, topic, section);
    if (!existsSync(directory)) return [];
    return readdirSync(directory, { withFileTypes: true }).filter(entry => entry.isDirectory()).map(entry => {
      const id = `${topic}/${section}/${entry.name}`;
      const available = languages.filter(language => existsSync(join(root, id, `solution.${language}`)));
      if (!available.length) return null;
      const details = metadata[id];
      if (!details || !difficulties.includes(details.difficulty) || !Array.isArray(details.patterns) ||
          !details.patterns.length || !details.patterns.every(pattern => typeof pattern === 'string' && pattern.length) ||
          !Array.isArray(details.prerequisites)) throw new Error(`Invalid or missing metadata: ${id}`);
      const readme = readFileSync(join(root, id, 'README.md'), 'utf8');
      const title = readme.match(/^# (.+)$/m)?.[1] ?? entry.name.replaceAll('_', ' ');
      const source = readme.match(/\[LeetCode #\d+[^\]]*\]\((https:\/\/leetcode\.com\/problems\/[^)]+)\)/)?.[1] ?? null;
      return { id, topic, title, languages: available, difficulty: details.difficulty,
        patterns: details.patterns, prerequisites: details.prerequisites, source };
    }).filter(Boolean);
  })).sort((a, b) => a.id.localeCompare(b.id));
  const ids = new Set(lessons.map(lesson => lesson.id));
  for (const id of Object.keys(metadata)) if (!ids.has(id)) throw new Error(`Stale exercise metadata: ${id}`);
  for (const lesson of lessons) for (const prerequisite of lesson.prerequisites) {
    if (!ids.has(prerequisite) || prerequisite === lesson.id) throw new Error(`Invalid prerequisite ${prerequisite} for ${lesson.id}`);
  }
  const visited = new Set(), visiting = new Set();
  const byId = new Map(lessons.map(lesson => [lesson.id, lesson]));
  function visit(id) {
    if (visiting.has(id)) throw new Error(`Prerequisite cycle: ${id}`);
    if (visited.has(id)) return;
    visiting.add(id);
    for (const prerequisite of byId.get(id).prerequisites) visit(prerequisite);
    visiting.delete(id); visited.add(id);
  }
  for (const id of ids) visit(id);
  return lessons;
}

export function filterLessons(lessons, filters = {}) {
  const words = (filters.query ?? '').toLowerCase().trim().split(/\s+/).filter(Boolean);
  return lessons.filter(lesson => {
    if ((filters.language && !lesson.languages.includes(filters.language)) ||
        (filters.topic && lesson.topic !== filters.topic) ||
        (filters.difficulty && lesson.difficulty !== filters.difficulty) ||
        (filters.pattern && !lesson.patterns.includes(filters.pattern))) return false;
    if (!words.length) return true;
    const text = `${lesson.id} ${lesson.title} ${lesson.difficulty} ${lesson.languages.join(' ')} ${lesson.patterns.join(' ')} ${lesson.prerequisites.join(' ')}`.toLowerCase();
    return words.every(word => text.includes(word));
  });
}

export function selectLessons(root, lessons, selection) {
  if (selection === 'all') return lessons;
  const id = relative(root, resolve(root, selection)).split(sep).join('/');
  return lessons.filter(lesson => lesson.id === id || lesson.topic === id);
}
