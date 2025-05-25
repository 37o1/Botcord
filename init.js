const { spawn } = require("child_process");
const { stdout, stderr, exit } = require("process");

console.log("Initializing BotCord...");

const electron = spawn("npx", [
	"electron", "dist/loader.js"
]);

electron.stdout.pipe(stdout);
electron.stderr.pipe(stderr);

electron.on("exit", (code) => exit(code));