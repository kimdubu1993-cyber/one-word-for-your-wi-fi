// One Word for Your Wi-Fi — entry program.
// Writes our single word to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "Moody";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
