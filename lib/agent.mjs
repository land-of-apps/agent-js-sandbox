import { spawn } from "./spawn.mjs";

const url = "https://github.com/applandinc/appmap-agent-js.git";

export const installAgent = (branch) =>
  spawn(
    "npm",
    "install",
    branch === "main" ? "@appland/appmap-agent-js" : `${url}#${branch}`,
    "--save-dev",
  );
