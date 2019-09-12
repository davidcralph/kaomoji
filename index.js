// Imports
const emotes     = require('./emotes.json');
const { Plugin } = require('powercord/entities');

// Cutting edge technology
module.exports = class Kaomoji extends Plugin {
  startPlugin () {
    // Emotions
    this.registerCommand(
      'joy',
      [],
      'Appends a joy kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.joy[Math.floor(Math.random() * emotes.joy.length)]}`
        }
      }
    )

    this.registerCommand(
      'love',
      [],
      'Appends a love kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.love[Math.floor(Math.random() * emotes.love.length)]}`
        }
      }
    )

    this.registerCommand(
      'embarrassed',
      [],
      'Appends a embarrassed kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.embarrassed[Math.floor(Math.random() * emotes.embarrassed.length)]}`
        }
      }
    )

    this.registerCommand(
      'sympathy',
      [],
      'Appends a sympathy kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.sympathy[Math.floor(Math.random() * emotes.sympathy.length)]}`
        }
      }
    )

    this.registerCommand(
      'displeased',
      [],
      'Appends a displeased kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.displeased[Math.floor(Math.random() * emotes.displeased.length)]}`
        }
      }
    )

    this.registerCommand(
      'angry',
      [],
      'Appends a angry kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.angry[Math.floor(Math.random() * emotes.angry.length)]}`
        }
      }
    )

    this.registerCommand(
      'sad',
      [],
      'Appends a sad kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.sad[Math.floor(Math.random() * emotes.sad.length)]}`
        }
      }
    )

    this.registerCommand(
      'pain',
      [],
      'Appends a pain kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.pain[Math.floor(Math.random() * emotes.pain.length)]}`
        }
      }
    )

    this.registerCommand(
      'fear',
      [],
      'Appends a fear kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.fear[Math.floor(Math.random() * emotes.fear.length)]}`
        }
      }
    )

    this.registerCommand(
      'shrug',
      [],
      'Appends a shrug kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.shrug[Math.floor(Math.random() * emotes.shrug.length)]}`
        }
      }
    )

    this.registerCommand(
      'confusion',
      [],
      'Appends a confusion kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.confusion[Math.floor(Math.random() * emotes.confusion.length)]}`
        }
      }
    )

    this.registerCommand(
      'doubt',
      [],
      'Appends a doubt kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.doubt[Math.floor(Math.random() * emotes.doubt.length)]}`
        }
      }
    )

    this.registerCommand(
      'surprise',
      [],
      'Appends a surprise kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.surprise[Math.floor(Math.random() * emotes.surprise.length)]}`
        }
      }
    )


    // Actions
    this.registerCommand(
      'wave',
      [],
      'Appends a wave kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.wave[Math.floor(Math.random() * emotes.wave.length)]}`
        }
      }
    )

    this.registerCommand(
      'hug',
      [],
      'Appends a hug kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.hug[Math.floor(Math.random() * emotes.hug.length)]}`
        }
      }
    )

    this.registerCommand(
      'apologise',
      [],
      'Appends a apologise kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.apologise[Math.floor(Math.random() * emotes.apologise.length)]}`
        }
      }
    )

    this.registerCommand(
      'wink',
      [],
      'Appends a wink kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.wink[Math.floor(Math.random() * emotes.wink.length)]}`
        }
      }
    )

    this.registerCommand(
      'lurk',
      [],
      'Appends a lurk kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.lurk[Math.floor(Math.random() * emotes.lurk.length)]}`
        }
      }
    )

    this.registerCommand(
      'write',
      [],
      'Appends a write kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.write[Math.floor(Math.random() * emotes.write.length)]}`
        }
      }
    )

    this.registerCommand(
      'run',
      [],
      'Appends a run kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.run[Math.floor(Math.random() * emotes.run.length)]}`
        }
      }
    )

    this.registerCommand(
      'sleep',
      [],
      'Appends a sleep kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.sleep[Math.floor(Math.random() * emotes.sleep.length)]}`
        }
      }
    )

    this.registerCommand(
      'nosebleed',
      [],
      'Appends a nosebleed kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.nosebleed[Math.floor(Math.random() * emotes.nosebleed.length)]}`
        }
      }
    )

    this.registerCommand(
      'party',
      [],
      'Appends a party kaomoji to your message!',
      '{c}',
      (args) => {
        return {
          send: true,
          result: `${args.join(' ')} ${emotes.party[Math.floor(Math.random() * emotes.party.length)]}`
        }
      }
    );
  }
};
