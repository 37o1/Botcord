import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";

/**
 * Point to the project directory
 */
export const rootDir = dirname(dirname(__dirname));
export const token = existsSync(join(rootDir, "token.env")) ? readFileSync(join(rootDir, "token.env"), "utf-8") : void 0;

if (!token) throw `

[ Botcord error ]
Please set your Discord bot token in ${join(rootDir, "token.env")}.
Get it from here: https://discord.com/developers/applications

`;