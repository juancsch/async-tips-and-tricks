const {
	bloquedMethod
} = require('../api')

const timeouts = [1000, 4000, 2000] // eslint-disable-line

(async function () {

	console.log('async env')
	console.time('map')

	const mapped = timeouts.map(async (timeout) => {
		await bloquedMethod({ timeout })
		return Date.now()
	}) // => array de promesas pendientes concurrentes

	console.log('mapped:', await Promise.all(mapped))

	console.timeEnd('map')
	console.log('end!!!')
})() // Sirve para lanzar operaciones asincronas de forma concurrentes que luego recuperas

// Yes, map is synchronous.
// It's a higher order function, that takes a new function and applies it to the given array.

// Some people think that because they give a function as a parameter to map then it 'should'
// act like an event callback function, but it really doesn't. The map function just applies
// the function parameter to the array and only after it finishes, it continues execution for
// the resulting code after the map block.
