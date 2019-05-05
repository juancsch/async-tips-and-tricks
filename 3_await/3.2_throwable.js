function myfun2 (value) {
	// throw new Error('me ostio')
	return Promise.reject(new Error('me ostio'))
}

async function asyncFn2 () {
	try {
		const a = await myfun2('holi')
		console.log('*** a:', a)
	} catch (e) {
		console.log('*** catch', e)
	}
}

asyncFn2()
