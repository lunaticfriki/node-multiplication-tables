const fs = require('fs')
require('colors')

const createFile = async (base = 2, print = false, limit = 10) => {
  try {
    let output,
      log = `Table of ${base}:\n
`
    for (let i = 1; i <= limit; i++) {
      output += `${base} * ${i} = ${base * i}\n`
      log += `${base} ${'*'.rainbow} ${i} ${'='.rainbow} ${base * i}\n`
    }

    print && console.log(log)

    fs.writeFileSync(`./out/table-of-${base}.txt`, output)

    return `table-of-${base}.txt`
  } catch (error) {
    throw error
  }
}

module.exports = { createFile }
