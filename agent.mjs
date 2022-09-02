import {spawnSync} from "node:child_process";
import {spawn} from "./spawn.mjs";

const url = "https://github.com/applandinc/appmap-agent-js.git";

export const installAgent = (branch) => spawn(
  "npm",
  "install",
  branch === null
    ? "@appland/appmap-agent-js"
    : `${url}#${branch}`,
  "--save-dev",
);
