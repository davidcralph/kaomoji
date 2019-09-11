// Imports
const { Plugin } = require('powercord/entities');
const emotes     = require('./emotes.json');

// Cutting edge technology
module.exports = class Kaomoji extends Plugin {
    startPlugin() {
      // Emotions
      this.registerCommand(
        'joy',
        [],
        'Appends a joy kaomoji to your message!',
        '{c}',
        (args) => {
          return {
              send: true,
              result: args.join(' ') + ' ' + hug[Math.floor(Math.random() * hug.length)]
          }
        }
      )

      // Actions
      this.registerCommand(
          'hug',
		  [],
          'Appends a hug kaomoji to your message!',
          '{c}',
          (args) => {
            return {
                send: true,
                result: args.join(' ') + ' ' + hug[Math.floor(Math.random() * hug.length)]
            }
          }
        )
    }
};