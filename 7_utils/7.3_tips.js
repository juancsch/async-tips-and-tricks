const fs = require('fs')

fs.readFileSync(path) // => MALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

// promisify: BIENNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
const fsReadFile = promisify(fs.readFile)

// fs-extra: MUY BUENOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
const fs = require('fs-extra')

// SDK: MEJORRRRRRRRRRRRRRRRRRRRRRRRR: estable desde la sdk 11 ...
fs.promises
