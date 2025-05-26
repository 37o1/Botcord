import { app, BrowserWindow } from "electron";
import { createServer, ViteDevServer } from "vite";
import { rootDir } from "./config";

export let window: BrowserWindow;
export let vite: ViteDevServer;

app.on("ready", async () => {
	vite = await createServer({
		appType: "mpa",
		publicDir: false,
		base: "/",
		cacheDir: "cache",
		envDir: rootDir,
		root: rootDir,
	});
	
	window = new BrowserWindow({
		acceptFirstMouse: false,
		autoHideMenuBar: true,
		darkTheme: true,
		closable: true,
		maximizable: true,
		minimizable: true,
		fullscreenable: true,
		fullscreen: false,
		backgroundColor: "#000000",
		focusable: true,
		frame: true,
		title: "Botcord",
		center: true,
		icon: "Discord",
	});
});