//* Imports
const emotes = require('./emotes.json');
const { Plugin } = require('powercord/entities');

// Cutting edge technology
module.exports = class Kaomoji extends Plugin {
	startPlugin() {
		powercord.api.commands.registerCommand({
			command: 'kaomoji',
			aliases: ['kao'],
			description: 'Appends a kaomoji to your message!',
			usage: '{c} [ emotion ]',
			executor: (args) => {
				const emoteSelection = emotes[args.shift()];
				if (emoteSelection) {
					return {
						send: true,
						result: `${args.join(' ')} ${
							emoteSelection[Math.floor(Math.random() * emoteSelection.length)]
						}`,
					};
				}
				return {
					send: false,
					result:
						"There aren't any kaomoji for that emotion! Pick an emotion from the list. If you need help, checkout <https://github.com/ohlookitsderpy/kaomoji>!",
				};
			},
			autocomplete: (args) => {
				if (args.length !== 1) {
					return false;
				}

				return {
					commands: Object.keys(emotes)
						.filter((e) => e.includes(args[0].toLowerCase()))
						.map((e) => ({
							command: e,
							description: '',
						})),
					header: 'Kaomoji Emotions',
				};
			},
		});
	}

	pluginWillUnload() {
		powercord.api.commands.unregisterCommand('kaomoji');
	}
};
