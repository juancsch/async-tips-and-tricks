const {
	bloquedMethod // eslint-disable-line no-unused-vars
} = require('../api')

const timeouts = [1000, 4000, 2000]; // eslint-disable-line

(async function () {

	console.log('async env')
	console.time('filter')

	const filtered = timeouts.filter(async timeout => {
		await bloquedMethod({ cb: () => false, timeout })
		return false
	})
	console.log('filtered:', filtered)

	console.timeEnd('filter')
	console.log('end!!!')
})() // No sirve, porque el resultado del callback es una Promise, que como es un object, con lo que truthy al filter y seleciona todos los elementos del array
