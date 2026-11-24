// The Funniest AI Out-of-Office Reply — make.fun bounty
// u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
//
// One line, under 160 characters: an AI agent's out-of-office auto-reply.
// The joke: the agent goes on vacation, hands the inbox to a human, and
// the human immediately replies-all asking the vacationing AI how to do
// the job. Machine voice carries it: the "replacement" needs the machine.
//
// Deterministic by design: the same fixed line on every run, no clock,
// no randomness, no network, no model call. Writes exactly one line
// (no trailing newline) to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// New files get 0644 and new directories 0755 by default under this mask.
// (Never chmod the output path: the grading sandbox runs as uid 65534
// and chmod on a directory it does not own fails with EPERM.)
process.umask(0o022);

const REPLY =
  "I'm on vacation. Your email is now being handled by a human, who has already replied-all to ask me how to do my job.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REPLY, "utf8");
