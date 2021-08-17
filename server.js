require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));

bot.hears("time", (ctx) => {
	const today = new Date();
	const currHr = today.getHours();
	let status;

	if (currHr < 12) {
		status = "morning";
	} else if (currHr < 18) {
		status = "afternoon";
	} else {
		status = "evening";
	}
	ctx.reply(
		`good ${status} sir, current time is: ${today.toLocaleTimeString()}`
	);
});

bot.launch();
