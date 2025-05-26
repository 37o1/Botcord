import { app } from "electron";
import { createServer } from "vite";
import { rootDir } from "./config";
import { client } from "./bot";
import { vite, window } from "./window";

// trigger init (javascript bs)
client;
window;
vite;
