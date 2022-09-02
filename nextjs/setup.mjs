import {spawn} from "../spawn.mjs";
import {installAgent} from "../agent.mjs";

const {
  "--agent-branch": branch,
} = {
  "--agent-branch": null,
  ... Object.fromEntries(process.argv.slice(2).map((arg) => arg.split("="))),
}

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

spawn("ln", "-s", "../nextjs/appmap.yml", "appmap.yml");

console.log("\n\nSetup done, record the nextjs-blog with:");
console.log("> cd nextjs-blog");
console.log("> npx appmap-agent-js");
