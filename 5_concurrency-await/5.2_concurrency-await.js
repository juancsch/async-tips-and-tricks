const {
	bloquedErrorMethod, // eslint-disable-line no-unused-vars
	bloquedMethod, // eslint-disable-line no-unused-vars
	noBloquedMethod // eslint-disable-line no-unused-vars
} = require('../api')

async function asyncFn1 () {

	console.time('asyncFn1')

	const promises = Promise.all([
	// const values = await Promise.all([
	// const [a, b, c] = await Promise.all([
		bloquedMethod({ cb: () => 'a' }),
		bloquedMethod({ cb: () => 'b' }),
		bloquedMethod({ cb: () => 'c' })
	])
	// return values

	console.log('*** Promise.all asyncFn', values)
}

asyncFn1()
	.then(res => {
		console.timeEnd('asyncFn1')
		console.log('asyncFn1 then:', res)
	})
	.catch(console.error)

// ----------------------------------------------------------------

async function asyncFn2 () {

	console.time('asyncFn2')

	const p1 = bloquedMethod({ cb: () => 'a' })
	const p2 = bloquedMethod({ cb: () => 'b' })
	const p3 = bloquedMethod({ cb: () => 'c' })
	// return [await p1, await p2, await p3]

	// await p1, await p2, await p3
	const values = [await p1, await p2, await p3]
	console.log('*** Await asyncFn', values)

	// return [ // ES SECUENCIAL, NO PARALELA
	// 	await bloquedMethod({ cb: () => 'a' }),
	// 	await bloquedMethod({ cb: () => 'b' }),
	// 	await bloquedMethod({ cb: () => 'c' })
	// ]
}

asyncFn2().then(res => {
	console.timeEnd('asyncFn2')
	console.log('asyncFn2 then:', res)
})
