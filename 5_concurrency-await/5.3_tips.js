const {
	bloquedErrorMethod, // eslint-disable-line no-unused-vars
	bloquedMethod, // eslint-disable-line no-unused-vars
	noBloquedMethod // eslint-disable-line no-unused-vars
} = require('../api')

// Concurrent
const p1 = bloquedMethod({ cb: () => '1' })
const p2 = bloquedMethod({ cb: () => '2' })
p1.then(r1 => p2.then(r2 => [r1, r2]))

// Sequential
const p3 = bloquedMethod({ cb: () => '3' })
const p4 = p3.then(r1 => bloquedMethod({ cb: () => '4' }))
Promise.all([p3, p4])

// Key to determining how “concurrent” async code is: Focus on when
// asynchronous computations start, not on how Promises are handled.
