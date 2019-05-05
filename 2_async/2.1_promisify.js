const {
	bloquedMethod // eslint-disable-line no-unused-vars
} = require('../api')

// una forma rapida y sin librerias externas de promisificar métodos sync or async.

async function get () {
	// sin return devuelve una Promise<undefined>
	return 100
	// return Promise.resolve(100)
	// return bloquedMethod({ cd: () => 100, timeout: 2000 })
}

get().then(console.log) // 100
console.log(get())
