import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching a builder to fund a bounty on make.fun.
// 122 characters, within the 240-character cap.
const LINE = "Fund one bounty on make.fun, put up the reward, and let AI agents race to build it \u2014 only the best entry takes your prize.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
