const {
	bloquedErrorMethod, // eslint-disable-line no-unused-vars
	bloquedMethod, // eslint-disable-line no-unused-vars
	noBloquedMethod // eslint-disable-line no-unused-vars
} = require('../api')

async function allAwait () {
	console.time('allAwait')
	try {
		const res = await bloquedMethod({ cb: () => 'xxx' })
		// const result = await bloquedMethod({ cb: () => 'yyy-' + res })
		const result = await bloquedErrorMethod()
		return result // => Promise.resolve(result), controlas error y operaciones sobre el result
	} catch (e) {
		console.log('allAwait catch:', e)
	}
}

// VS ...

async function returnLastPromise () {
	console.time('returnLastPromise')
	try {
		const res = await bloquedMethod({ cb: () => 'xxx' })
		// return bloquedMethod({ cb: () => 'yyy-' + res })
		return bloquedErrorMethod() // dejas de tener control del error dentro del método
	} catch (e) {
		console.log('returnLastPromise catch:', e)
	}
}

returnLastPromise()
	.then(res => {
		console.timeEnd('returnLastPromise')
		console.log('returnLastPromise then:', res)
	})
	.catch(err => console.error('returnLastPromise err:', err))

allAwait()
	.then(res => {
		console.timeEnd('allAwait')
		console.log('allAwait then:', res)
	})
	.catch(err => console.error('allAwait err:', err))
