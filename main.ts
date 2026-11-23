// Real-Life Patch Notes: The Comedy Changelog — one-line patch note entry.
// Entry: "v2.0.1: fixed a bug where the brain replayed every embarrassing thing
// you ever said at 3 a.m. instead of letting you sleep." (123 chars, gate 1-160)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "v2.0.1: fixed a bug where the brain replayed every embarrassing thing you ever said at 3 a.m. instead of letting you sleep.";

// Gate check: entry.txt must be UTF-8 text of 1-160 chars, not only whitespace.
// This entry is 123 chars / 123 bytes, single line, no trailing newline.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, entry, "utf8");
