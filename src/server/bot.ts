import { Client, IntentsBitField, Partials } from "discord.js";
import { token } from "./config";

export const client = new Client({
	intents: Array.from(IntentsBitField.Flags as any),
	partials: [Partials.Channel, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.Message, Partials.Reaction, Partials.SoundboardSound, Partials.ThreadMember, Partials.User],
});

function login () {
	client.login(token).catch(err => {
		console.error(err);
		login();
	}).then(() => {
		console.log("Discord client successfuly logged in.");
	});
};

login();