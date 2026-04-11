import { execFileSync } from "node:child_process";

const processList = execFileSync("ps", ["-axo", "pid=,command="], {
  encoding: "utf8",
});

const currentPid = String(process.pid);
const devProcesses = processList
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .filter((line) => !line.startsWith(currentPid))
  .filter((line) => !line.includes("ensure-no-next-dev"))
  .filter((line) => line.includes("next dev") || line.includes("npm run dev"));

if (devProcesses.length > 0) {
  console.error(
    [
      "Cannot run `npm run build` while `next dev` is running.",
      "Next writes development and production artifacts during both commands,",
      "which can corrupt the dev server cache and cause missing vendor chunks.",
      "",
      "Stop the dev server first, then run `npm run build` again.",
    ].join("\n")
  );
  process.exit(1);
}
