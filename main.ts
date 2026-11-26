// Absurd Micro-Startup Pitch-Off — entry program.
// Writes one absurdly specific micro-startup pitch (a single sentence,
// under 200 characters) to /output/entry.txt.
// Node 22, stdlib only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "A $5/month agent that renames your 400 untitled Google Docs into titles your future self will actually understand, without reading a single one.";

// Named constants for the output file and the bounty character limit.
const OUTPUT_FILE = "entry.txt";
const MAX_ENTRY_CHARS = 200;

// Length gate: the bounty requires 1–200 characters, not only whitespace.
const entryChars = [...ENTRY].length;
if (entryChars < 1 || entryChars > MAX_ENTRY_CHARS || ENTRY.trim().length === 0) {
  throw new Error(
    `Entry must be 1-${MAX_ENTRY_CHARS} characters, got ${entryChars}.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUTPUT_FILE), ENTRY, "utf8");
