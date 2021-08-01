const argv = require('./config/yargs')
require('colors')
const { createFile } = require('./helpers/multiply')

console.clear()

createFile(argv.b, argv.p, argv.l)
  .then((name) => console.log(name.rainbow, 'successfully created!\n'.magenta))
  .catch((err) => console.log(err))
