const {
	bloquedErrorMethod, // eslint-disable-line no-unused-vars
	bloquedMethod, // eslint-disable-line no-unused-vars
	noBloquedMethod // eslint-disable-line no-unused-vars
} = require('../api')

function asyncFn () {
	return bloquedMethod({ cb: () => 'holi' }) // bloquedErrorMethod()
		.then((value) => {
			// si no hay return devuelve una PROMISE.RESOLVE vacia=con undefined
			console.log('then:', value)
			// return Promise.resolve(`valor calculado ${value}`)
			// return `valor calculado ${value}` // => better option: todo valor lo mete dentro de una PROMISE.RESOLVE
			// return Promise.reject(`err ${value}`) // rechaza la promesa, la captura el 1º catch
			// throw new Error('ostion') // => rompe la cadena de promesas, la captura el 1º catch
			// return new Error('then ostion') // => ???
		})
		.catch((err) => {
			// si no hay return devuelve una PROMISE.RESOLVE vacia=con undefined
			console.log('catch:', err)
			// return err
			// return Promise.reject(new Error(`catched:${err}`)) // devuelve una promesa rechazada explicitament
			// throw err // => rompe la cadena de promesas, la captura el 1º catch
			// return new Error(`catched:${err}`) // ???
		})
}

const asyncExec = asyncFn()
	.then((data) => console.log('*** SUCCESS:', data))
	.catch((err) => console.log('*** ERROR:', err))

console.log('***', asyncExec)
console.log('END ???')
