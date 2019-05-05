// promisify de node

const { promisify } = require('util')

function cb (err, ...args) {
	// do independene things
}

// <T,U> promisify(fn: [T] => U): [T] => Promise<U>
const cbPromised = promisify(cb)

async function fnAsync () {
	await cbPromised('', 42)
	// more independent things
}
