import {spawn} from "../spawn.mjs";
import {parseArgv} from "../argv.mjs";
import {installAgent} from "../agent.mjs";

const options = {stdio:"inherit"};

const {
  "--agent-branch": branch,
  "--juice-tag": tag,
} = {
  "--agent-branch": null,
  "--juice-tag": null,
  ... parseArgv(process.argv.slice(2)),
}

console.log("Cloning juice-shop repository...");
spawn(
  "git",
  "clone",
  "https://github.com/bkimminich/juice-shop.git",
);

process.chdir("juice-shop");

if (tag !== null) {
  console.log(`\n\nChecking out juice-shop tag ${tag}`);
  spawn("git", "checkout", `tag/${tag}`);
}

console.log("\n\nInstalling juice-shop...");
spawn("npm", "install");

console.log(`\n\nInstalling the agent ${branch == null ? "from npm" : branch}...`);
installAgent(branch);

console.log("\n\nLinking configuration file...");
spawn("ln", "-s", "../juice/appmap.yml", "appmap.yml");

console.log("\n\nDone, record the juice-shop with:");
console.log("> cd juice-shop");
console.log("> npx appmap-agent-js --scenario=process");
