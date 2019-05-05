const {
	bloquedErrorMethod, // eslint-disable-line no-unused-vars
	bloquedMethod, // eslint-disable-line no-unused-vars
	noBloquedMethod // eslint-disable-line no-unused-vars
} = require('../api')

// ------------------------------------------------------------------------------------------

// *** 0 ***

const result = bloquedMethod({ cb: function () {
    return '9000'
}, timeout: 3000 })

console.log('***', result) // que es result, su tipo?
console.log('END ???')

result.then(v => console.log('***', v))

// *** 1 *** Promise

const asyncExec = Promise.resolve('a results')
// const asyncExec = Promise.reject(new Error('ostion!!'))
	.then((data) => console.log(`then: ${data}`))
	.catch((err) => console.log(`error: ${err}`))

// const asyncExec = Promise.all([Promise.resolve('a'), Promise.resolve('b'), Promise.resolve('b')])
// // const asyncExec = Promise.all([Promise.resolve('a'), Promise.reject(new Error('ostion!!')), Promise.resolve('b')])
// // const asyncExec = Promise.all([Promise.resolve('a'), Promise.reject(new Error('ostion 1!!')), Promise.reject(new Error('ostion 2!!'))])
// 	.then((data) => console.log(`then: ${data}`))
// 	.catch((err) => console.log(`error: ${err}`))

console.log('***', asyncExec) // que es asyncExec, su tipo (es lo que devuelve then o catch)?
console.log('END ???')
