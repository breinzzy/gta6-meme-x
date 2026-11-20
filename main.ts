// Entry for make.fun bounty gta6-meme-x-01, "Post a GTA 6 meme on X".
// Node 22, standard library only, no network, no clock, no files
// outside this repository. All this program does is copy POST.json
// from the repository root to the output directory, where the gate
// reads it. The entry itself is the X post: the meme picture and
// its text are read by the house from X, not from anything written
// here. POST.json must name the post's address as
// {"url": "https://x.com/<handle>/status/<id>"}.
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
