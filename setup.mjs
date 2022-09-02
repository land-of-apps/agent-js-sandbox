import {spawnSync} from "node:child_process";

const agent_url = "https://github.com/applandinc/appmap-agent-js.git";

const juice_url = "https://github.com/bkimminich/juice-shop.git";

const options = {stdio:"inherit"};

const {
  "--agent-branch": branch,
  "--juice-tag": tag,
} = {
  "--agent-branch": null,
  "--juice-tag": null,
  ... Object.fromEntries(process.argv.slice(2).map((arg) => arg.split("="))),
}

console.log("Cloning juice-shop repository...");
spawnSync("git", ["clone", juice_url], options);

process.chdir("juice-shop");

if (tag !== null) {
  console.log(`\n\nChecking out juice-shop tag ${tag}`);
  spawnSync("git", ["checkout", `tag/${tag}`], options);
}

console.log("\n\nInstalling juice-shop...");
spawnSync("npm", ["install"], options);

console.log(`\n\nInstalling the agent ${branch == null ? "from npm" : branch}...`);
spawnSync(
  "npm",
  [
    "install",
    branch === null ? "@appland/appmap-agent-js" : `${agent_url}#${branch}`,
    "--save-dev",
  ],
  options,
);

console.log("\n\nLinking configuration file...");
spawnSync("ln", ["-s", "../appmap.yml", "appmap.yml"], options);

console.log("\n\nDone, record the juice-shop with:");
console.log("> cd juice-shop");
console.log("> npx appmap-agent-js --scenario=process");
