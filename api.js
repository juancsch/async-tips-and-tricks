module.exports = {
	bloquedErrorMethod,
	bloquedMethod,
	noBloquedMethod
}

// function bloquedMethod (timeout) {
// 	return new Promise(resolve => setTimeout(resolve, timeout))
// }

function bloquedErrorMethod ({ cb = () => new Error('ostion!!!'), timeout = 1000 }) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => reject(cb()), timeout) // zona de codigo asincrono
    })
}

function bloquedMethod ({ cb = () => {}, timeout = 1000 }) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(cb()), timeout) // zona de codigo asincrono
    })
}

function noBloquedMethod (cb = () => {}) {
	// throw new Error('ostionnnn')
	return cb()
}
