#!/usr/bin/env node

import { spawn } from "../lib/spawn.mjs";
import { installAgent } from "../lib/agent.mjs";

const [branch = "main", tag = null] = process.argv.slice(2);

spawn("git", "clone", "https://github.com/bkimminich/juice-shop.git");

process.chdir("juice-shop");

if (tag !== null) {
  spawn("git", "checkout", `tag/${tag}`);
}

spawn("npm", "install");

installAgent(branch);

spawn("ln", "-s", "../config/juice-shop.yml", "appmap.yml");

console.log("\nSetup done! Record the juice-shop with:");
console.log("> cd juice-shop");
console.log("> npx appmap-agent-js --scenario=process");
