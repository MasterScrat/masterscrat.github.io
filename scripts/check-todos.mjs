// Fails the build if a "[TODO" placeholder made it into the published site (dist/).
// Drafts are excluded from production builds, so only live pages are checked.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});

const found = walk('dist').filter((f) => readFileSync(f, 'utf8').includes('[TODO'));
if (found.length) {
  console.error(`\n[TODO] placeholders found on published pages:\n  ${found.join('\n  ')}\n`);
  process.exit(1);
}
console.log('No [TODO] placeholders on published pages.');
