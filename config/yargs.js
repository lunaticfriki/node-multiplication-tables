require('colors')

const { argv } = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    describe: 'Sets the base of the multiplication table',
    default: 2,
  })
  .option('p', {
    alias: 'print',
    type: 'boolean',
    describe: 'Logs the multiplication table',
    default: false,
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    describe: 'Sets the limit of the multiplication table',
    default: 10,
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw 'ERROR: Base must be a number!'.red
    }
    if (isNaN(argv.l)) {
      throw 'ERROR: The limit must be a number!'.red
    }
    return true
  })

module.exports = argv
