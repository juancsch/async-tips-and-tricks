const {
	bloquedMethod // eslint-disable-line no-unused-vars
} = require('../api')

const timeouts = [1000, 4000, 2000]; // eslint-disable-line

(async function () {

	console.log('async env')
	console.time('forEach')

	timeouts.forEach(
		async timeout => await bloquedMethod({ timeout })
	)

	console.timeEnd('forEach')
	console.log('end!!!')
})() // No sirve para secuencializar ni paralelizar, la ejecución continua perdiendo el control
