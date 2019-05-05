async function iPromiseYouAError () {
	throw new Error('Esto no aparecerá como un Error sino como una promesa rechazada')
	// return Promise.reject('Esto no aparecerá como un Error sino como una promesa rechazada')
	// return Promise.reject(new Error('Esto no aparecerá como un Error sino como una promesa rechazada'))
}

iPromiseYouAError().catch((err) => {
	console.log('catched:', err.message)
}) // catched: Esto no aparecerá como un error lanzado sino como una promesa rechazada
