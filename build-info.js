import { execSync } from "child_process";
import { writeFileSync } from "fs";

const lastUpdated = execSync(
  "git log -1 --format=%cI"
).toString().trim();

writeFileSync(
  ".env",
  `VITE_LAST_UPDATED=${lastUpdated}\n`
);