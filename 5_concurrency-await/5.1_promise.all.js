// const assert = require('assert')
// const httpGet = require('httpGet')

const {
	bloquedMethod // eslint-disable-line no-unused-vars
} = require('../api')

// Promise.all() usa un patron de concurrencia “fork join”:
Promise.all([
		// Fork async computations
		bloquedMethod({ cb: () => 1 }),
		bloquedMethod({ cb: () => 2 })
]) // Promise { <pending> }
// Join async computations
.then(([text1, text2]) => {
	assert.strictEqual(text1, 'Content of file1.txt\n')
	assert.strictEqual(text2, 'Content of file2.txt\n')
})
