#!/usr/bin/env node

import { installAgent } from "../lib/agent.mjs";

const argv = process.argv.slice(2);

if (argv.length < 1 || argv.length > 2) {
  console.log(
    "usage: bin/update-agent.mjs <nextjs-blog|juice-shop> [agent-branch]",
  );
  process.exit(1);
} else {
  const [sandbox, branch = "main"] = argv;
  process.chdir(sandbox);
  installAgent(branch);
}
