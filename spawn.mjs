
import {spawnSync} from "node:child_process";

const options = {stdio:"inherit"};

export const spawn = (command, ...argv) => {
  const {error, signal, status} = spawnSync(command, argv, options);
  if (error) {
    throw error;
  } else if (signal !== null) {
    throw new Error(
      `${command} ${argv.join(" ")} killed with ${String(status)}`,
    );
  } else if (status !== 0) {
    throw new Error(
      `${command} ${argv.join(" ")} failed with ${String(status)}`,
    );
  }
};
