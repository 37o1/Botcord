const { spawn } = require("child_process");
const { join } = require("path");
const { stdout, stderr, exit } = require("process");

console.log("Initializing BotCord...");

const electron = spawn("npx", [
	"electron", join(__dirname, "dist", "server", "loader.js")
]);

electron.stdout.pipe(stdout);
electron.stderr.pipe(stderr);

electron.on("exit", (code) => exit(code));