const {
	bloquedErrorMethod, // eslint-disable-line no-unused-vars
	bloquedMethod, // eslint-disable-line no-unused-vars
	noBloquedMethod // eslint-disable-line no-unused-vars
} = require('../api')

async function asyncFn () {
	try {
		const a = await bloquedMethod({ cb: () => '1', timeout: 2000 })
		console.log(`a: ${a}`)
		const b = noBloquedMethod(() => '2')
		console.log(`b: ${b}`)
		const c = await bloquedErrorMethod({ cb: () => new Error('ostion!!!') })
		console.log(`c: ${c}`)
		const d = noBloquedMethod(() => '4')
		console.log(`c: ${d}`)
		return a + b + c + d
	} catch (err) { // captura las promesas rechazadas, ya que el await las lanza con throw
		console.log(`ERROR: ${err}`)
		// return err
		err.message = `A error was catched ${err.message}`
		throw err
	}
}

asyncFn()
	.then((data) => console.log(`DATA: ${data}`))
	.catch((err) => console.log(`CATCH: ${err}`))
