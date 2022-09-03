#!/usr/bin/env node

import { spawn } from "../lib/spawn.mjs";
import { installAgent } from "../lib/agent.mjs";

const [branch = "main"] = process.argv.slice(2);

spawn(
  "npx",
  "create-next-app",
  "nextjs-blog",
  "--use-npm",
  "--example",
  "https://github.com/vercel/next-learn/tree/master/basics/learn-starter",
);

process.chdir("nextjs-blog");

installAgent(branch);

spawn("ln", "-s", "../config/nextjs-blog.yml", "appmap.yml");

console.log("\nSetup done! Record the nextjs-blog with:");
console.log("> cd nextjs-blog");
console.log("> npx appmap-agent-js");
