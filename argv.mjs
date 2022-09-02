
const parseArg = (arg) => arg.split("=");

export const parseArgv = (argv) => Object.fromEntries(argv.map(parseArg));
