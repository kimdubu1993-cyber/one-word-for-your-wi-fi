// One Word for Your Wi-Fi — entry program.
// Writes our single word to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";

// "Moody": Wi-Fi that is perfect one minute and dead the next for no reason — funny, universally true, and a fine network name.
const word = "Moody";

const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, word, "utf8");
