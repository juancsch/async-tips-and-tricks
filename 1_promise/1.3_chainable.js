const {
	bloquedErrorMethod, // eslint-disable-line no-unused-vars
	bloquedMethod, // eslint-disable-line no-unused-vars
	noBloquedMethod // eslint-disable-line no-unused-vars
} = require('../api')

function asyncFn () {
	return bloquedMethod({ cb: () => '1' }) // bloquedErrorMethod({cb: () => new Error('ostion!!!'), timeout: 2000})
		.then(a => {
			console.log(`a: ${a}`)
			return a + '2'
		})
		.then(b => {
			console.log(`b: ${b}`)
			return bloquedMethod({ cb: () => b + '3' })
		})
		.then(c => {
			console.log(`c: ${c}`)
			return noBloquedMethod(() => c + '4')
		}).catch(err => {
			console.log(`catch ${err.message}`)
			throw err
		})
		// .finally(() => {
		// 	// comming soon: stage 4 => specification draft 2020
		// })
}

const asyncExec = asyncFn()
  .then((data) => console.log(`DATA: ${data}`))
  .catch((err) => console.log(`ERROR: ${err}`))

console.log('***', asyncExec) // que es asyncFn, su tipo?
console.log('END ???')

// ------------------------------------------------------------------

const buyEggs = () => {}
const brokeTheEgg = (eggs) => {}
const mixEggs = (eggsOpened) => {}
const cookEggs = (eggsMixed) => {}
const clean = (e) => {}

function makeAnOmelet (eggs) {
	return buyEggs()
			.then(brokeTheEgg)
			.then(mixEggs)
			.then(cookEggs)
			.catch(clean)
}
