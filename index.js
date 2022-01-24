const emotes = require('./emotes.json');
const { Plugin } = require('powercord/entities');

module.exports = class Kaomoji extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'kaomoji',
      aliases: [ 'kao' ],
      description: 'Appends a kaomoji to your message!',
      usage: '{c} [ emotion ]',
      executor: (args) => {
        try {
          const emoteSelection = emotes[args.shift()][args.shift()];
          if (emoteSelection) {
            return {
              send: true,
              result: `${args.join(' ')} ${emoteSelection}`
            };
          }
          throw new Error();
        } catch {
          return {
            send: false,
            result: 'There aren\'t any kaomoji for that emotion! Pick an emotion from the list. If you need help, check out <https://github.com/davidcralph/kaomoji>!'
          };
        }
      },
      autocomplete: (args) => {
        if (args.length < 1 || args.length > 2) {
          return false;
        } else if (args.length === 1) {
          return {
            commands: Object.keys(emotes)
              .filter((e) => e.includes(args[0].toLowerCase()))
              .map((e) => ({
                command: e,
                description: ''
              })),
            header: 'Kaomoji Emotions'
          };
        } else if (args.length === 2) {
          try {
            const object = emotes[args.shift()];
            return {
              commands: object.map((item, index) => ({
                command: index,
                description: item
              })),
              header: 'Kaomoji Emotions'
            };
          } catch {
            return {
              commands: [],
              header: 'No kaomoji found :('
            };
          }
        }

        return {
          commands: Object.keys(emotes)
            .filter((e) => e.includes(args[0].toLowerCase()))
            .map((e) => ({
              command: e,
              description: ''
            })),
          header: 'Kaomoji Emotions'
        };
      }
    });
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('kaomoji');
  }
};
