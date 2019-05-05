const {
	bloquedMethod 
} = require('../api')

const timeouts = [1000, 4000, 2000]; // eslint-disable-line

(async function () {

	console.log('async env')
	console.time('reduce')

	const data = timeouts.reduce(async (acc, timeout) => {
		await acc
		return bloquedMethod({ timeout })
	}, Promise.resolve())

	console.log('reduce:', await data)

	console.timeEnd('reduce')
	console.log('end!!!')
})() // Puedes secuencializar la ejecución de operaciones asincronas y obtener el valor único.
